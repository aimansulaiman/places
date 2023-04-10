import _ from 'lodash'
import React, { FunctionComponent } from 'react'
import { Image, ImageProps } from 'react-native'

export interface ImageWithPlaceholderProps extends ImageProps {
  useSlowImage?: boolean
}

export const ImageWithPlaceholder: FunctionComponent<ImageWithPlaceholderProps> =
  (props) => {
    let fadeDuration = 300

    let source = props.source
    const uri = _.get(source, 'uri')


    if (!source || uri === '') {
      source = {}
    }

    if (Array.isArray(source)) {
      source = source.filter((nestedSource) => nestedSource?.uri)
    }

    return (
      <Image
        fadeDuration={fadeDuration}
        resizeMode="contain"
        {...props}
        source={source}
      />
    )
  }
