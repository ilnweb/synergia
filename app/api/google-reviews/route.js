import { NextResponse } from 'next/server';

export async function GET() {
  const placeId = process.env.GOOGLE_PLACE_ID;
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!placeId || !apiKey) {
    return NextResponse.json({ error: 'Missing Google Places API configuration' }, { status: 500 });
  }

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`
    );

    const data = await response.json();

    if (data.status !== 'OK') {
      return NextResponse.json(
        { error: data.error_message || 'Failed to fetch reviews' },
        { status: 400 }
      );
    }

    const reviews =
      data.result.reviews?.map(review => ({
        id: review.time,
        name: review.author_name,
        avatar: review.profile_photo_url,
        rating: review.rating,
        des: review.text,
        time: review.relative_time_description,
      })) || [];

    return NextResponse.json({
      reviews,
      rating: data.result.rating,
      totalReviews: data.result.user_ratings_total,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch Google reviews' }, { status: 500 });
  }
}
