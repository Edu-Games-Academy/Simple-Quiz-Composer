/**
 * Trigger download file with provided content, file name and MIME type
 *
 * @example ```ts
 * downloadAsFile({
 *   data: '{"key": "value"}',
 *   fileName: 'myFile.json',
 *   fileType: 'application/json',
 * })
 * ```
 */
export const downloadAsFile = ({
  data,
  fileName = 'data.txt',
  fileType = 'text/plain',
}: {
  /** file content */
  data: string
  /** Generated file name */
  fileName?: string
  /** File MIME type */
  fileType?: string
}) => {
  const blob = new Blob([data], { type: fileType })
  const url = URL.createObjectURL(blob)

  const link = document.createElement('a')
  link.href = url
  link.download = fileName

  link.click()
  URL.revokeObjectURL(url)
}
