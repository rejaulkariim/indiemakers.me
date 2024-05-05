import { ogImageSchema } from '@/lib/validations/og.validation';
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

const interRegular = fetch(
  new URL('/public/assets/fonts/Inter-Regular.ttf', import.meta.url)
).then((res) => res.arrayBuffer());

const interBold = fetch(
  new URL('/public/assets/fonts/CalSans-SemiBold.ttf', import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET(req: Request) {
  try {
    const fontRegular = await interRegular;
    const fontBold = await interBold;

    const url = new URL(req.url);
    const values = ogImageSchema.parse(Object.fromEntries(url.searchParams));
    const heading =
      values.heading.length > 140
        ? `${values.heading.substring(0, 140)}...`
        : values.heading;

    const { mode } = values;
    const paint = mode === 'dark' ? '#fff' : '#000';

    const fontSize = heading.length > 100 ? '55px' : '40px';

    return new ImageResponse(
      (
        <div
          tw="flex relative flex-col p-12 w-full h-full items-start"
          style={{
            color: paint,
            background:
              mode === 'dark'
                ? 'linear-gradient(90deg, #000 0%, #111 100%)'
                : 'white',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z" />
            <path d="M8 14v.5" />
            <path d="M16 14v.5" />
            <path d="M11.25 16.25h1.5L12 17l-.75-.75Z" />
            <defs>
              <clipPath id="a">
                <path fill={paint} d="M0 9.771h150v30.457H0z" />
              </clipPath>
            </defs>

            <text x="12" y="22" font-size="8" text-anchor="middle">
              Indie Makers
            </text>
          </svg>

          <div tw="flex flex-col flex-1 py-10">
            <div
              tw="flex text-xl uppercase font-bold tracking-tight"
              style={{ fontFamily: 'Inter', fontWeight: 'normal' }}
            >
              {values.type}
            </div>
            <div
              tw="flex leading-[1.1] text-[30px] font-bold"
              style={{
                fontFamily: 'Cal Sans',
                fontWeight: 'bold',
                marginLeft: '-3px',
                fontSize,
              }}
            >
              {heading}
            </div>
          </div>
          <div tw="flex items-center w-full justify-between">
            <div
              tw="flex text-xl"
              style={{ fontFamily: 'Inter', fontWeight: 'normal' }}
            >
              www.indiemakers.me
            </div>
            <div
              tw="flex items-center text-xl"
              style={{ fontFamily: 'Inter', fontWeight: 'normal' }}
            >
              <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
                <path
                  d="M30 44v-8a9.6 9.6 0 0 0-2-7c6 0 12-4 12-11 .16-2.5-.54-4.96-2-7 .56-2.3.56-4.7 0-7 0 0-2 0-6 3-5.28-1-10.72-1-16 0-4-3-6-3-6-3-.6 2.3-.6 4.7 0 7a10.806 10.806 0 0 0-2 7c0 7 6 11 12 11a9.43 9.43 0 0 0-1.7 3.3c-.34 1.2-.44 2.46-.3 3.7v8"
                  stroke={paint}
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18 36c-9.02 4-10-4-14-4"
                  stroke={paint}
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div tw="flex ml-2">github.com/rejaulkariim/indiemakers.me</div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Inter',
            data: fontRegular,
            weight: 400,
            style: 'normal',
          },
          {
            name: 'Cal Sans',
            data: fontBold,
            weight: 700,
            style: 'normal',
          },
        ],
      }
    );
  } catch (error) {
    return new Response(`Failed to generate image`, {
      status: 500,
    });
  }
}
