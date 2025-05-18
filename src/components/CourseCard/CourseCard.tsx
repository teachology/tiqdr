import React from 'react';

interface CourseCardProps {
  title: string;
  image: string;
  details: string[];
  buttonText: string;
  category: string;
  duration: string;
  certificateIncluded: boolean;
  videoPreviewUrl?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  image,
  details,
  buttonText,
  category,
  duration,
  certificateIncluded,
  videoPreviewUrl
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 space-y-2 text-right">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">الفئة: {category} | المدة: {duration}</p>
        <p className="text-sm text-gray-500">
          الشهادة: {certificateIncluded ? 'نعم' : 'لا'}
        </p>
        <ul className="list-disc text-sm text-gray-700 pr-4 space-y-1">
          {details.map((detail, idx) => (
            <li key={idx}>{detail}</li>
          ))}
        </ul>
        {videoPreviewUrl && (
          <div className="mt-3 aspect-video">
            <iframe
              src={videoPreviewUrl}
              title="Course Preview"
              className="w-full h-full rounded-lg"
              allowFullScreen
            />
          </div>
        )}
        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
