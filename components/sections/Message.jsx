import H2 from '@typography/H2'
import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'

function Registry({ num }) {
  return (
    <PageSection color={'cream-light'}>
      <InnerWrapper>
        <H2 before={num} color={'black'}>
          Memories
        </H2>
        <p>
          Tell us your favorite memory or moment you have of Jordan/Bergen/Both. You can write your
          name or leave it anonymous. Feel free to fill it out multiple times.
        </p>
        <div className='py-6'>
          <form className='grid grid-cols-1 gap-3'>
            <input
              type={'text'}
              name='title'
              placeholder='Story Title'
              className='col-span-1 text-black  w-full text-lg font-semibold border-0 rounded-md px-6 py-3 cursor-text'
            />
            <input
              type={'text'}
              name='author'
              placeholder='Author (optional)'
              className='col-span-1 text-black text-opacity-75 w-full text-md font-normal italic border-0 rounded-md px-6 py-4 cursor-text'
            />

            <textarea
              name='story'
              rows={6}
              placeholder='Story'
              className='text-black col-span-1 w-full text-md font-normal border-0 rounded-md px-6 py-4 cursor-text'
            />
            <div className='col-span-1'>
              <button type='submit' value={'publish'} className='button my-2 px-8 float-right'>
                Publish &rarr;
              </button>
            </div>
          </form>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default Registry
