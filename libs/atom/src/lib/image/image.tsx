import { getSrcset } from '@myorg/util'
import { Simage } from './image.style'
import { TImage } from './image.type'

export const Image = ({
  alt,
  src,
  aspect,
  height,
  title,
  width,
  loading = 'lazy',
  srcset,
  label,
  labelledBy,
  testId,
}: TImage) => {
  const ariaLabel = label || `${alt}, optimized for different screen sizes`
  const srcSetValue = getSrcset({
    src,
    $srcset: srcset,
  })

  return (
    <Simage
      alt={alt}
      aria-label={ariaLabel}
      aria-labelledby={labelledBy}
      data-testid={testId}
      src={src}
      height={height}
      title={title}
      width={width}
      loading={loading}
      $aspect={aspect}
      $srcset={srcset}
      srcSet={srcSetValue}
    />
  )
}
