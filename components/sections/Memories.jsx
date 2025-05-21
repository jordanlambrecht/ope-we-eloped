import H2 from '@typography/H2'
import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import cn from 'classnames'
import { SendToMonday } from '@lib/monday'
function Memories({ num }) {
  const [submitted, setSubmitted] = useState(false)

  ///////////
  // SENDGRID
  ///////////
  async function SendToSendgrid(data) {
    console.log('sendgrid')
    await fetch('/api/mail-story', {
      method: 'POST',
      body: JSON.stringify(data),
    }).then((res) => res.json())
  }

  //////////////////
  // REACT-HOOK-FORM
  //////////////////

  const {
    register,
    handleSubmit,
    resetField,
    setError,
    formState: { errors },
  } = useForm()

  function handleSubmitAnother() {
    setSubmitted(!submitted)
    resetField('title')
    resetField('author')
    resetField('story')
  }
  // Handle the submit
  const onSubmit = (data) => {
    setError('title', {
      type: 'custom',
      message: 'Make sure your email is entered correctly.',
    })
    console.log(data)
    SendToSendgrid(data)
    SendToMonday(data)
    // SendToMailchimp(data)
    // resetField('email')
    setSubmitted(true)
    console.log(errors)
  }

  //////////////////
  return (
    <PageSection color={'cream'} id='memories'>
      <InnerWrapper>
        <H2 before={num} color={'black'}>
          Memories
        </H2>
        <p>
          Tell us your favorite memory or moment you have of Jordan/Bergen/both. You can write your
          name or leave it anonymous. Feel free to fill it out multiple times.
        </p>
        <div className='py-6'>
          <form
            className={cn('grid grid-cols-1 gap-3 max-w-2xl', { ['hidden opacity-0']: submitted })}
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type={'text'}
              name='title'
              placeholder='Story Title'
              required
              className='w-full col-span-1 px-6 py-3 text-lg font-semibold text-black border-2 border-gray-200 rounded-md cursor-text focus:ring-0 focus:border-black focus:border-2'
              {...register('title', {})}
            />
            <input
              type={'text'}
              name='author'
              placeholder='Author (optional)'
              className='w-full col-span-1 px-6 py-4 italic font-normal text-black text-opacity-75 border-2 border-gray-200 rounded-md text-md cursor-text focus:ring-0 focus:border-black'
              {...register('author', {})}
            />

            <textarea
              name='story'
              rows={6}
              placeholder='Story'
              required
              className='w-full col-span-1 px-6 py-4 font-normal text-black border-2 border-gray-200 rounded-md text-md cursor-text focus:ring-0 focus:border-black'
              {...register('story', {})}
            />
            <div className='col-span-1'>
              <button type='submit' value={'publish'} className='float-right px-8 my-2 button'>
                Publish &rarr;
              </button>
            </div>
          </form>

          <div
            className={cn('font-extabold text-xl  duration-300', {
              ['hidden opacity-0']: !submitted,
              ['block opacity-100']: submitted,
            })}
          >
            Thank you 🙂 Hopefully you kept it mildly PG.{' '}
            <button className='underline' onClick={handleSubmitAnother}>
              Click here{' '}
            </button>{' '}
            to submit another story
          </div>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default Memories
