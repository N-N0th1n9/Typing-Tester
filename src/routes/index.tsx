import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <div className='flex flex-col h-full'>
      <div>
        <div className='bg-[#18214c] rounded-sm flex gap-3 place-self-center text-center px-2 py-1'>
          <button>time</button>
          <button>words</button>
        </div>
      </div>
      <section className='text-2xl flex items-center mx-auto h-full w-[70%] text-center font-medium'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nulla, fugit voluptas enim pariatur, commodi, quibusdam sequi eum quaerat nam corrupti necessitatibus provident illum maxime atque. Quibusdam quidem molestiae odit!
      </section>
    </div>
  );
}
