'use client'

import { useState, useEffect, useRef } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Clipboard, Trash2, ImageIcon, Video, Loader2, Upload } from 'lucide-react'

interface Asset {
  id: string
  name: string
  file_path: string
  public_url: string
  file_type: 'image' | 'video'
  file_size: number
  folder: 'images' | 'videos'
  created_at: string
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export default function AssetsPage() {
  const [assets, setAssets] = useState<Asset[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<'images' | 'videos'>('images')

  // Upload form state
  const [folder, setFolder] = useState<'images' | 'videos'>('images')
  const [fileName, setFileName] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [uploadError, setUploadError] = useState('')
  const [uploadSuccess, setUploadSuccess] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Per-asset copy feedback
  const [copiedId, setCopiedId] = useState<string | null>(null)

  // Delete dialog state
  const [deleteTarget, setDeleteTarget] = useState<Asset | null>(null)
  const [deleting, setDeleting] = useState(false)

  async function fetchAssets() {
    setLoading(true)
    try {
      const res = await fetch('/api/admin/assets')
      if (!res.ok) throw new Error('Failed to fetch')
      const data = await res.json()
      setAssets(data)
    } catch {
      // silently fail — show empty state
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAssets()
  }, [])

  // Reset file input when folder changes
  function handleFolderChange(newFolder: 'images' | 'videos') {
    setFolder(newFolder)
    setFile(null)
    setUploadError('')
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selected = e.target.files?.[0] ?? null
    setUploadError('')
    if (!selected) {
      setFile(null)
      return
    }

    const maxSize = folder === 'images' ? 5 * 1024 * 1024 : 50 * 1024 * 1024
    const label = folder === 'images' ? '5MB' : '50MB'
    if (selected.size > maxSize) {
      setUploadError(`File is too large. Maximum size for ${folder} is ${label}.`)
      setFile(null)
      if (fileInputRef.current) fileInputRef.current.value = ''
      return
    }

    setFile(selected)
  }

  function sanitizeFileName(raw: string): string {
    return raw.trim().toLowerCase().replace(/\s+/g, '-')
  }

  async function handleUpload(e: React.FormEvent) {
    e.preventDefault()
    setUploadError('')
    setUploadSuccess('')

    const cleanName = sanitizeFileName(fileName)
    if (!cleanName) {
      setUploadError('Please enter a file name.')
      return
    }
    if (!file) {
      setUploadError('Please select a file.')
      return
    }

    const ext = file.name.includes('.') ? `.${file.name.split('.').pop()!.toLowerCase()}` : ''
    const filePath = `${folder}/${cleanName}${ext}`

    setUploading(true)
    try {
      const supabase = createClient()

      const { error: uploadError } = await supabase.storage
        .from('media')
        .upload(filePath, file, { upsert: true })

      if (uploadError) throw uploadError

      const {
        data: { publicUrl },
      } = supabase.storage.from('media').getPublicUrl(filePath)

      const res = await fetch('/api/admin/assets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: cleanName,
          file_path: filePath,
          public_url: publicUrl,
          file_type: folder === 'images' ? 'image' : 'video',
          file_size: file.size,
          folder,
        }),
      })

      if (!res.ok) throw new Error('Failed to save asset record')

      setUploadSuccess(`"${cleanName}${ext}" uploaded successfully.`)
      setFileName('')
      setFile(null)
      if (fileInputRef.current) fileInputRef.current.value = ''
      setActiveTab(folder)
      await fetchAssets()
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Upload failed. Please try again.'
      setUploadError(msg)
    } finally {
      setUploading(false)
    }
  }

  async function handleDelete() {
    if (!deleteTarget) return
    setDeleting(true)
    try {
      const res = await fetch(`/api/admin/assets/${deleteTarget.id}`, { method: 'DELETE' })
      if (!res.ok) throw new Error('Delete failed')
      setDeleteTarget(null)
      await fetchAssets()
    } catch {
      // keep dialog open on error
    } finally {
      setDeleting(false)
    }
  }

  async function handleCopy(asset: Asset) {
    try {
      await navigator.clipboard.writeText(asset.public_url)
      setCopiedId(asset.id)
      setTimeout(() => setCopiedId(null), 2000)
    } catch {
      // clipboard denied
    }
  }

  const filteredAssets = assets.filter((a) => a.folder === activeTab)

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1
          className="text-3xl font-light text-[#2C2C2C]"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          Assets
        </h1>
        <p
          className="text-sm text-[#8B7355] mt-1"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Manage images and videos for your website
        </p>
      </div>

      {/* Upload Section */}
      <div className="bg-white border border-[#F0E8DF] p-6 mb-8">
        <h2
          className="text-lg font-light text-[#2C2C2C] mb-4"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          Upload New Asset
        </h2>
        <form onSubmit={handleUpload} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Folder select */}
            <div>
              <label
                className="block text-xs font-semibold tracking-wider uppercase text-[#8B7355] mb-1.5"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Folder
              </label>
              <select
                value={folder}
                onChange={(e) => handleFolderChange(e.target.value as 'images' | 'videos')}
                className="w-full px-3 py-2 border border-[#F0E8DF] bg-[#FFFAF5] text-[#2C2C2C] text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                <option value="images">Images</option>
                <option value="videos">Videos</option>
              </select>
            </div>

            {/* File name */}
            <div>
              <label
                className="block text-xs font-semibold tracking-wider uppercase text-[#8B7355] mb-1.5"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                File Name (without extension)
              </label>
              <input
                type="text"
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
                placeholder="e.g. botox-treatment"
                className="w-full px-3 py-2 border border-[#F0E8DF] bg-[#FFFAF5] text-[#2C2C2C] text-sm placeholder-[#B8A99A] focus:outline-none focus:border-[#D4AF37] transition-colors"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              />
            </div>
          </div>

          {/* File picker */}
          <div>
            <label
              className="block text-xs font-semibold tracking-wider uppercase text-[#8B7355] mb-1.5"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              File{' '}
              <span className="normal-case font-normal text-[#B8A99A]">
                (max {folder === 'images' ? '5MB' : '50MB'})
              </span>
            </label>
            <input
              ref={fileInputRef}
              type="file"
              accept={folder === 'images' ? 'image/*' : 'video/mp4,video/mov'}
              onChange={handleFileChange}
              className="w-full px-3 py-2 border border-[#F0E8DF] bg-[#FFFAF5] text-[#2C2C2C] text-sm focus:outline-none focus:border-[#D4AF37] transition-colors file:mr-3 file:py-1 file:px-3 file:border-0 file:text-xs file:font-medium file:bg-[#D4AF37] file:text-white file:cursor-pointer hover:file:bg-[#B8960A]"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            />
            {file && (
              <p
                className="text-xs text-[#8B7355] mt-1"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Selected: {file.name} ({formatFileSize(file.size)})
              </p>
            )}
          </div>

          {/* Errors & success */}
          {uploadError && (
            <p
              className="text-sm text-red-600 bg-red-50 border border-red-200 px-3 py-2"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {uploadError}
            </p>
          )}
          {uploadSuccess && (
            <p
              className="text-sm text-green-700 bg-green-50 border border-green-200 px-3 py-2"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {uploadSuccess}
            </p>
          )}

          <button
            type="submit"
            disabled={uploading}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#D4AF37] text-white text-xs font-medium tracking-wider uppercase hover:bg-[#B8960A] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            {uploading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Uploading...
              </>
            ) : (
              <>
                <Upload className="h-4 w-4" />
                Upload Asset
              </>
            )}
          </button>
        </form>
      </div>

      {/* Tab switcher */}
      <div className="flex gap-0 mb-6 border-b border-[#F0E8DF]">
        {(['images', 'videos'] as const).map((tab) => {
          const count = assets.filter((a) => a.folder === tab).length
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-xs font-semibold tracking-wider uppercase transition-colors border-b-2 -mb-px ${
                activeTab === tab
                  ? 'border-[#D4AF37] text-[#D4AF37]'
                  : 'border-transparent text-[#8B7355] hover:text-[#2C2C2C]'
              }`}
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {tab} ({count})
            </button>
          )
        })}
      </div>

      {/* Assets grid */}
      {loading ? (
        <div className="flex items-center justify-center py-16">
          <Loader2 className="h-8 w-8 animate-spin text-[#D4AF37]" />
        </div>
      ) : filteredAssets.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 bg-white border border-[#F0E8DF]">
          {activeTab === 'images' ? (
            <ImageIcon className="h-10 w-10 text-[#D4AF37] mb-3 opacity-50" />
          ) : (
            <Video className="h-10 w-10 text-[#D4AF37] mb-3 opacity-50" />
          )}
          <p
            className="text-sm text-[#B8A99A]"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            No {activeTab} uploaded yet
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredAssets.map((asset) => (
            <div
              key={asset.id}
              className="bg-white border border-[#F0E8DF] overflow-hidden hover:border-[#D4AF37] transition-colors"
            >
              {/* Thumbnail / video placeholder */}
              <div className="h-44 bg-[#FDF8F3] flex items-center justify-center overflow-hidden">
                {asset.file_type === 'image' ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={asset.public_url}
                    alt={asset.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-2">
                    <Video className="h-10 w-10 text-[#D4AF37] opacity-60" />
                    <span
                      className="text-xs text-[#B8A99A]"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      Video file
                    </span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-4">
                <p
                  className="font-medium text-[#2C2C2C] text-sm truncate mb-1"
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem' }}
                  title={asset.name}
                >
                  {asset.name}
                </p>
                <div
                  className="flex items-center justify-between text-xs text-[#B8A99A] mb-3"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  <span>{formatFileSize(asset.file_size)}</span>
                  <span>{formatDate(asset.created_at)}</span>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handleCopy(asset)}
                    className="flex items-center gap-1.5 flex-1 justify-center px-3 py-1.5 text-xs font-medium border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-colors"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                    title="Copy public URL"
                  >
                    <Clipboard className="h-3.5 w-3.5 flex-shrink-0" />
                    {copiedId === asset.id ? 'Copied!' : 'Copy URL'}
                  </button>
                  <button
                    onClick={() => setDeleteTarget(asset)}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-red-200 text-red-500 hover:bg-red-500 hover:text-white hover:border-red-500 transition-colors"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                    title="Delete asset"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Delete confirmation dialog */}
      {deleteTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white border border-[#F0E8DF] p-6 max-w-md w-full mx-4 shadow-xl">
            <h3
              className="text-xl font-light text-[#2C2C2C] mb-3"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Delete Asset
            </h3>
            <p
              className="text-sm text-[#8B7355] mb-2"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              <span className="font-semibold text-[#2C2C2C]">{deleteTarget.name}</span>
            </p>
            <div
              className="bg-amber-50 border border-amber-200 text-amber-800 text-xs px-3 py-2 mb-5"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Warning: Make sure this asset is not currently used on your website before
              deleting. Deleting will permanently remove the file.
            </div>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setDeleteTarget(null)}
                disabled={deleting}
                className="px-4 py-2 text-xs font-medium tracking-wider uppercase border border-[#F0E8DF] text-[#8B7355] hover:bg-[#FFFAF5] transition-colors disabled:opacity-60"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                disabled={deleting}
                className="flex items-center gap-2 px-4 py-2 text-xs font-medium tracking-wider uppercase bg-red-500 text-white hover:bg-red-600 transition-colors disabled:opacity-60"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {deleting ? (
                  <>
                    <Loader2 className="h-3.5 w-3.5 animate-spin" />
                    Deleting...
                  </>
                ) : (
                  'Delete'
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
