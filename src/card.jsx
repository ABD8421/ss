import React, { useEffect, useState } from 'react';

const Card = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://openapi.programming-hero.com/api/videos/category/1000'); 
        const result = await response.json();
        if (result.status) {
          setCategories(result.data);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching categories:', error);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return <div className="text-center py-4">Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {categories.map((data) => (
        <div key={data.category_id} className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white">
          <div>
            <img
              src={data.thumbnail}
              alt={data.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </div>

          <div className="px-4 py-3 flex">
            <div className="flex-shrink-0">
              <img
                src={data.authors[0]?.profile_picture}
                alt={data.authors[0]?.profile_name}
                className="w-12 h-12 rounded-full border-2 border-gray-300"
              />
            </div>

            <div className="ml-4 flex flex-col justify-between">
              <h2 className="font-semibold text-lg text-gray-800">{data.title}</h2>
              <div className="flex items-center space-x-2 text-gray-600">
                <p className="text-sm">{data.authors[0]?.profile_name}</p>
                {data.authors[0]?.verified && (
                  <span className="text-xs text-blue-500">✔</span>
                )}
              </div>
              <p className="text-sm text-gray-500">{data.others?.views} Views</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
