import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';
import React from 'react';

interface CloudImagePropType {
  className: string;
  publidId: string;
}
const CloudImg: React.FC<CloudImagePropType> = ({
  className,
  publidId,
}) => {
  const cld = new Cloudinary({ cloud: { cloudName: 'dfau0jssn' } });

  // Use this sample image or upload your own via the Media Explorer
  const img = cld
    .image(publidId)
    .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
    .quality('auto')
    .resize(auto().gravity(autoGravity()));
  return <AdvancedImage cldImg={img} className={className} />;
};
export default CloudImg;
