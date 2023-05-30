import { TColorType, TSizeType, TTextAsType, TTextSizeType } from '@myorg/type'
import { FormikProps } from 'formik'

type label = string
type placeholder = string
type describedby = string
type required = boolean
type type = string

export type TInput = {
  label?: label
  placeholder?: placeholder
  describedby?: describedby
  required?: required
  type?: type
  color?: TColorType
  as?: TTextAsType
  size?: TTextSizeType
  padding?: TSizeType
  name?: string
  field?: {
    name: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void
  }
  form?: FormikProps<any>
  click?: () => void
}

export type $TInput = {
  as?: TTextAsType
  $size?: TSizeType
  $color?: TColorType
  $padding?: TSizeType
}
