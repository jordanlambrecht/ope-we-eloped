import H3 from '@typography/H3'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { SendToMonday } from '@lib/monday_rsvp'

import cn from 'classnames'
const MAX_STEPS = 4
const FinishSectionButton = ({ onClick, isdisabled, children }) => {
  return (
    <button
      onClick={onClick}
      disabled={isdisabled}
      type='button'
      className='cursor-pointer text-center inline-block mt-4 font-medium rounded-md text-lg px-10 py-2 bg-black text-cream-light drop-shadow-sm duration-300 ease-in-out hover:scale-95 disabled:hover:scale-100 disabled:bg-opacity-30 '
    >
      {children}
    </button>
  )
}

function RSVP() {
  const [attending, setAttending] = useState(true)
  const [secondGuest, setSecondGuest] = useState(false)
  const [formStep, setFormStep] = useState(0)
  const [count, setCount] = useState(1)
  const [formStepGuests, setFormStepGuests] = useState(0)
  const maxGuests = 10
  const minGuests = 1
  const handleCount = (e) => {
    if (e > maxGuests) {
      setCount(maxGuests)
    } else if (e < minGuests) {
      setCount(minGuests)
    } else setCount(e)
  }

  const decrementCount = () => {
    if (count > minGuests) setCount(count - 1)
  }

  const incrementCount = () => {
    if (count < maxGuests) setCount(count + 1)
    else if (count > maxGuests) setCount(maxGuests)
  }
  const {
    register,
    resetField,
    reset,
    handleSubmit,

    formState: { errors, isValid, isDirty },
  } = useForm({
    mode: 'onChange',
  })

  const handleStepCompletion = () => {
    setFormStep((cur) => cur + 1)
  }
  const handleAdditionalGuestsStepCompletion = () => {
    setFormStepGuests(1)
    setFormStep(3)
  }
  const handleGoBackToPreviousStep = () => {
    if (secondGuest && formStep === 3 && formStepGuests === 0) {
      setSecondGuest(false)
      setCount(1)
      setFormStep((cur) => 3)
    }
    if (formStepGuests === 1 && formStep === 3) {
      setFormStepGuests(0)
      setFormStep((cur) => 3)
    } else setFormStep((cur) => cur - 1)
  }

  const onSubmit = (data) => {
    console.log(JSON.stringify(data, null, 2))

    if (!data.attending) {
      SendToMonday(data, attending, secondGuest, count)
      setFormStep(4)
    } else {
      SendToMonday(data, attending, secondGuest, count)
      handleStepCompletion()
    }

    resetField('firstguest_name')
    resetField('firstguest_attending')

    resetField('firstguest_address')
    resetField('firstguest_phone')
    resetField('secondguestattending')

    resetField('secondguest_name')
    resetField('secondguest_email')
    resetField('secondguest_phone')
    reset()
  }

  const resetForm = () => {
    // reset()
    reset()
    setFormStep(0)
    setCount(1)
    setAttending(true)
    setSecondGuest(false)
  }

  return (
    <div className='max-w-xl w-full my-12 bg-cream rounded-md border-2 border-black mx-auto overflow-hidden z-10'>
      {formStep < 5 && (
        <div className='h-2 w-full bg-gray-200'>
          <div
            style={{ width: `${((formStep + 1) / (MAX_STEPS + 1)) * 100}%` }}
            className='h-full bg-black'
          ></div>
        </div>
      )}
      <div className='px-4 lg:px-16 py-10'>
        {formStep < 4 && (
          <div
            className={`flex ${
              formStep === 0 ? 'justify-end' : 'justify-between'
            } items-center mb-6 font-medium text-sm`}
          >
            {formStep > 0 && (
              <button
                onClick={handleGoBackToPreviousStep}
                className='flex items-center text-gray-400 hover:text-gray-500 focus:outline-none'
              >
                <span> &larr; Previous</span>
              </button>
            )}
            <p className={cn('', { ['hidden']: !attending && formStep > 0 })}>
              Step {formStep + 1} of {MAX_STEPS}
            </p>
          </div>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* FIRST GUEST – NAME & RSVP */}
          {formStep >= 0 && (
            <section className={formStep === 0 ? 'block' : 'hidden'}>
              <h2 className='font-medium text-3xl mb-8 text-black'>First Guest</h2>
              <input
                type='text'
                placeholder='Full Name'
                name='firstguest_name'
                id='firstguest_name'
                className=' text-xl text-black text-opacity-75 max-w-3xl mb-3 mt-3 leading-relaxed
                bg-cream
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-black'
                {...register('firstguest_name', {
                  required: { message: 'Please enter your name.', value: true },
                  minLength: { message: "c'mon that's not your name", value: 3 },
                })}
              />
              <div className='flex flex-col lg:w-1/2 gap-3 my-8'>
                <input
                  {...register('firstguest_attending', { required: true })}
                  type='radio'
                  name='firstguest_attending'
                  value={true}
                  id='attending-yes'
                  className='absolute hidden'
                  defaultChecked
                />

                <label
                  htmlFor='attending-yes'
                  className={cn('rsvp', {
                    ['bg-black bg-opacity-10']: attending,
                    ['bg-black bg-opacity-0 hover:bg-opacity-5']: !attending,
                  })}
                  onClick={() => setAttending(true)}
                >
                  <p
                    className={cn(
                      ' inline-block align-middle my-0 py-0 leading-none text-black font-medium',
                    )}
                  >
                    Attending{' '}
                  </p>
                  <span
                    className={cn(
                      'self-center inline-block scale-105 -mb-1 duration-300 delay-75',
                      {
                        ['opacity-0']: !attending,
                        ['opacity-100']: attending,
                      },
                    )}
                  >
                    <svg height='13' width='16' className=' stroke-current fill-current'>
                      <path
                        strokeWidth='1px'
                        d='M14.293.293l1.414 1.414L5 12.414.293 7.707l1.414-1.414L5 9.586z'
                      ></path>
                    </svg>
                  </span>
                </label>

                <input
                  {...register('firstguest_attending', { required: true })}
                  type='radio'
                  name='firstguest_attending'
                  value={false}
                  id='attending-no'
                  className='absolute hidden'
                  onClick={() => setAttending(false)}
                />
                <label
                  htmlFor='attending-no'
                  className={cn('rsvp', {
                    ['bg-black bg-opacity-10']: !attending,
                    ['bg-black bg-opacity-0 hover:bg-opacity-5']: attending,
                  })}
                >
                  <p
                    className={cn(
                      ' inline-block align-middle my-0 py-0 leading-none text-black font-medium',
                    )}
                  >
                    Not Attending{' '}
                  </p>
                  <span
                    className={cn(
                      'self-center inline-block scale-105 -mb-1 duration-300 delay-75',
                      {
                        ['opacity-0']: attending,
                        ['opacity-100']: !attending,
                      },
                    )}
                  >
                    <svg height='13' width='16' className=' stroke-current fill-current'>
                      <path
                        strokeWidth='1px'
                        d='M14.293.293l1.414 1.414L5 12.414.293 7.707l1.414-1.414L5 9.586z'
                      ></path>
                    </svg>
                  </span>
                </label>
              </div>
              {/* <p>{attending.toString()}</p> */}
              <div className='flex justify-end'>
                <FinishSectionButton onClick={handleStepCompletion} isdisabled={!isValid}>
                  next &rarr;
                </FinishSectionButton>
              </div>
            </section>
          )}

          {formStep >= 1 && (
            <section className={formStep === 1 ? 'block' : 'hidden'}>
              <h2 className='font-medium text-3xl mb-8 text-black'>
                {!attending ? (
                  <span>
                    That&apos;s okay!
                    <br />
                    No hard feelings.
                  </span>
                ) : (
                  'First Guest – Details'
                )}
              </h2>
              {!attending ? (
                ''
              ) : (
                <div className={cn('flex flex-col gap-y-3', { ['hidden']: !attending })}>
                  <input
                    type='text'
                    placeholder='Home Address'
                    id='firstguest_address'
                    required
                    name='firstguest_address'
                    className=' text-xl text-black text-opacity-75 max-w-3xl mb-3 mt-3 leading-relaxed bg-cream
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-black'
                    {...register('firstguest_address', {
                      required: { message: 'Please enter your name.', value: true },
                      minLength: { message: "c'mon that's not your name", value: 3 },
                    })}
                  />
                  <input
                    type='tel'
                    placeholder='Phone Number'
                    id='firstguest_phone'
                    required
                    name='firstguest_phone'
                    className=' lg:w-1/2 text-xl text-black text-opacity-75 max-w-3xl mb-3 mt-3 leading-relaxed

                bg-cream
                    block
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-black'
                    {...register('firstguest_phone', {
                      required: { message: 'Please enter your phone number.', value: true },
                    })}
                  />
                  <input
                    type='email'
                    placeholder='Email'
                    id='firstguest_email'
                    required
                    name='firstguest_email'
                    className=' text-xl text-black text-opacity-75 max-w-3xl mb-3 mt-3 leading-relaxed

                bg-cream
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-black'
                    {...register('firstguest_email', {
                      required: { message: 'Please enter your email.', value: true },
                      minLength: { message: 'Not long enough', value: 3 },
                      pattern: {
                        value:
                          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: 'Invalid email address',
                      },
                    })}
                  />
                </div>
              )}

              {attending ? (
                <div className='flex justify-end'>
                  <FinishSectionButton onClick={handleStepCompletion} isdisabled={!isValid}>
                    next &rarr;
                  </FinishSectionButton>
                </div>
              ) : (
                <div className='flex justify-end'>
                  <button
                    type={'submit'}
                    isdisabled={!isValid}
                    className='cursor-pointer text-center inline-block mt-4 font-medium rounded-md text-lg px-10 py-2 bg-black text-cream-light drop-shadow-sm duration-300 ease-in-out hover:scale-95 disabled:hover:scale-100 disabled:bg-opacity-30 '
                  >
                    Submit &rarr;
                  </button>
                </div>
              )}
            </section>
          )}
          {formStep >= 2 && (
            <section className={formStep === 2 && attending ? 'block' : 'hidden'}>
              <h2 className='font-medium text-3xl mb-8 text-black'>Additional Guests</h2>
              {/* <label htmlFor='firstguest_name'>Name </label> */}
              <div className='flex flex-col md:flex-row md:w-1/2 gap-3 my-8'>
                <input
                  {...register('secondguest_attending', { required: true })}
                  type='radio'
                  name='secondguest_attending'
                  value={false}
                  id='secondattending-no'
                  className='absolute hidden'
                  defaultChecked
                />
                <label
                  htmlFor='secondattending-no'
                  className={cn(
                    ' flex flex-row justify-between duration-300 w-full px-4 self-center text-2xl cursor-pointer focus:ring-0 border-2 rounded-md py-4 ',
                    {
                      ['bg-black  bg-opacity-20 hover:bg-opacity-20']: !secondGuest,
                      ['bg-black  bg-opacity-0 hover:bg-opacity-5']: secondGuest,
                    },
                  )}
                  onClick={() => setSecondGuest(false)}
                >
                  <p
                    className={cn(
                      ' inline-block align-middle my-0 py-0 leading-none text-black font-medium',
                    )}
                  >
                    No{' '}
                  </p>
                </label>

                <input
                  {...register('secondguest_attending', { required: true })}
                  type='radio'
                  name='secondguest_attending'
                  value={true}
                  id='secondattending-yes'
                  className='absolute hidden'
                />
                <label
                  htmlFor='secondattending-yes'
                  className={cn(
                    ' flex flex-row justify-between duration-300  w-full px-4 self-center text-2xl cursor-pointer focus:ring-0 border-2 rounded-md py-4 ',
                    {
                      ['bg-black bg-opacity-20 hover:bg-opacity-20']: secondGuest,
                      ['bg-black bg-opacity-0 hover:bg-opacity-5']: !secondGuest,
                    },
                  )}
                  onClick={() => setSecondGuest(true)}
                >
                  <p
                    className={cn(
                      ' inline-block align-middle my-0 py-0 leading-none text-black font-medium',
                    )}
                  >
                    Yes
                  </p>
                </label>
              </div>
              {/* END NOT ATTENDING */}
              {!secondGuest ? (
                ''
              ) : (
                <div className='flex justify-center lg:justify-start gap-6 py-4 my-3'>
                  <input
                    type='button'
                    onClick={() => decrementCount()}
                    value='-'
                    className={cn(
                      ' duration-300 w-14 text-center align-middle leading-none px-4 self-center text-2xl cursor-pointer focus:ring-0 border-2 rounded-md py-4  active:scale-97 bg-black bg-opacity-0 hover:bg-opacity-10 ',
                    )}
                  />

                  <input
                    {...register('additionalguests_count', { required: true })}
                    type='number'
                    name='clicks'
                    value={count}
                    className=' text-xl text-black text-opacity-75 mb-3 mt-3 leading-relaxed bg-cream block w-14 mx-1 text-center px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black'
                    onChange={(event) => {
                      handleCount(event.target.value)
                    }}
                  />
                  <input
                    type='button'
                    onClick={() => incrementCount()}
                    value='+'
                    className={cn(
                      ' duration-300 w-14 text-center align-middle leading-none px-4 self-center text-2xl cursor-pointer focus:ring-0 border-2 rounded-md py-4  active:scale-97 bg-black bg-opacity-0 hover:bg-opacity-10 ',
                    )}
                  />
                </div>
                // <input
                //   type='text'
                //   placeholder='Full Name'
                //   name='secondguest_name'
                //   id='secondguest_name'
                //   className=' text-xl text-black text-opacity-75 max-w-3xl mb-3 mt-3 leading-relaxed
                // bg-cream
                //     block
                //     w-full
                //     px-0.5
                //     border-0 border-b-2 border-gray-200
                //     focus:ring-0 focus:border-black'
                //   {...register('secondguest_name', {
                //     required: { message: 'Please enter your name.', value: true },
                //     minLength: { message: "c'mon that's not your name", value: 3 },
                //   })}
                // />
              )}
              <div className='flex justify-end'>
                <FinishSectionButton onClick={handleStepCompletion} isdisabled={!isValid}>
                  next &rarr;
                </FinishSectionButton>
              </div>
            </section>
          )}
          {formStep === 3 && formStepGuests === 0 && (
            <section className={formStep === 3 ? 'block' : 'hidden'}>
              {!secondGuest ? (
                <div>
                  <h2 className='font-medium text-3xl mb-8 text-black'>
                    Nothing wrong with riding solo 😉
                  </h2>
                  <div className='flex justify-end'>
                    <button
                      type={'submit'}
                      disabled={!isValid}
                      className='cursor-pointer text-center inline-block mt-4 font-medium rounded-md text-lg px-10 py-2 bg-black text-cream-light drop-shadow-sm duration-300 ease-in-out hover:scale-95 disabled:hover:scale-100 disabled:bg-opacity-30 '
                    >
                      <span>Submit &rarr;</span>
                    </button>
                  </div>
                </div>
              ) : (
                <h2 className='font-medium text-3xl mb-8 text-black'>
                  {' '}
                  <span>
                    Additional Guests <span className='hidden md:inline'>– Details</span>
                  </span>
                </h2>
              )}

              {!secondGuest ? (
                ''
              ) : (
                <>
                  <div className={cn('flex flex-col gap-y-3', { ['hidden']: !secondGuest })}>
                    {count >= 1 ? (
                      <input
                        type='text'
                        placeholder="Second Guest's Name"
                        id='guest2'
                        className=' text-xl text-black text-opacity-75 max-w-3xl my-1 leading-relaxed bg-cream
                      block
                      w-full
                      px-0.5
                      border-0 border-b-2 border-gray-200
                      focus:ring-0 focus:border-black'
                        {...register('guest2', {
                          required: { message: 'Please enter their name.', value: true },
                          minLength: { message: "c'mon that's not your name", value: 3 },
                        })}
                      />
                    ) : (
                      ''
                    )}
                    {count >= 2 ? (
                      <input
                        type='text'
                        placeholder="Third Guest's Name"
                        id='guest3'
                        className=' text-xl text-black text-opacity-75 max-w-3xl my-1 leading-relaxed bg-cream
                      block
                      w-full
                      px-0.5
                      border-0 border-b-2 border-gray-200
                      focus:ring-0 focus:border-black'
                        {...register('guest3', {
                          required: { message: 'Please enter their name.', value: true },
                          minLength: { message: "c'mon that's not your name", value: 3 },
                        })}
                      />
                    ) : (
                      ''
                    )}
                    {count >= 3 ? (
                      <input
                        type='text'
                        placeholder="Fourth Guest's Name"
                        id='guest4'
                        className=' text-xl text-black text-opacity-75 max-w-3xl my-1 leading-relaxed bg-cream
                      block
                      w-full
                      px-0.5
                      border-0 border-b-2 border-gray-200
                      focus:ring-0 focus:border-black'
                        {...register('guest4', {
                          required: { message: 'Please enter their name.', value: true },
                          minLength: { message: "c'mon that's not your name", value: 3 },
                        })}
                      />
                    ) : (
                      ''
                    )}
                    {count >= 4 ? (
                      <input
                        type='text'
                        placeholder="Fifth Guest's Name"
                        id='guest5'
                        className=' text-xl text-black text-opacity-75 max-w-3xl my-1 leading-relaxed bg-cream
                      block
                      w-full
                      px-0.5
                      border-0 border-b-2 border-gray-200
                      focus:ring-0 focus:border-black'
                        {...register('guest5', {
                          required: { message: 'Please enter their name.', value: true },
                          minLength: { message: "c'mon that's not your name", value: 3 },
                        })}
                      />
                    ) : (
                      ''
                    )}
                    {/* <input
                      type='tel'
                      placeholder='Phone Number'
                      id='secondguest_phone'
                      required
                      className=' w-1/2 text-xl text-black text-opacity-75 max-w-3xl mb-3 mt-3 leading-relaxed bg-cream block px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black'
                      {...register('secondguest_phone', {
                        required: { message: 'Please enter their name.', value: true },
                        minLength: { message: "c'mon that's not your name", value: 3 },
                      })}
                    />
                    <input
                      type='email'
                      placeholder='Email'
                      id='secondguest_email'
                      className=' text-xl text-black text-opacity-75 max-w-3xl mb-3 mt-3 leading-relaxed bg-cream block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black'
                      {...register('secondguest_email', {
                        required: { message: 'Please enter your email.', value: true },
                        pattern: {
                          value:
                            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                          message: 'Invalid email address',
                        },
                      })}
                    /> */}
                  </div>
                  <div className='flex justify-end'>
                    {count >= 5 ? (
                      <FinishSectionButton
                        onClick={handleAdditionalGuestsStepCompletion}
                        isdisabled={!isValid}
                      >
                        Add More &rarr;
                      </FinishSectionButton>
                    ) : (
                      <button
                        type={'submit'}
                        disabled={!isValid}
                        className='cursor-pointer text-center inline-block mt-4 font-medium rounded-md text-lg px-10 py-2 bg-black text-cream-light drop-shadow-sm duration-300 ease-in-out hover:scale-95 disabled:hover:scale-100 disabled:bg-opacity-30 '
                      >
                        <span>Submit &rarr;</span>
                      </button>
                    )}
                  </div>
                </>
              )}
              {/* handleAdditionalGuestsStepCompletion */}
            </section>
          )}
          {formStep === 3 && count >= 5 && formStepGuests === 1 && (
            <section>
              <h2 className='font-semibold text-3xl mb-8'>even more guests</h2>
              <div className={cn('flex flex-col gap-y-3', { ['hidden']: !secondGuest })}>
                {count >= 5 ? (
                  <input
                    type='text'
                    placeholder="Sixth Guest's Name"
                    id='guest6'
                    className=' text-xl text-black text-opacity-75 max-w-3xl my-1 leading-relaxed bg-cream
                      block
                      w-full
                      px-0.5
                      border-0 border-b-2 border-gray-200
                      focus:ring-0 focus:border-black'
                    {...register('guest6', {
                      required: { message: 'Please enter their name.', value: true },
                      minLength: { message: "c'mon that's not your name", value: 3 },
                    })}
                  />
                ) : (
                  ''
                )}
                {count >= 6 ? (
                  <input
                    type='text'
                    placeholder="Seventh Guest's Name"
                    id='guest7'
                    className=' text-xl text-black text-opacity-75 max-w-3xl my-1 leading-relaxed bg-cream
                      block
                      w-full
                      px-0.5
                      border-0 border-b-2 border-gray-200
                      focus:ring-0 focus:border-black'
                    {...register('guest7', {
                      required: { message: 'Please enter their name.', value: true },
                      minLength: { message: "c'mon that's not your name", value: 3 },
                    })}
                  />
                ) : (
                  ''
                )}
                {count >= 7 ? (
                  <input
                    type='text'
                    placeholder="Eighth Guest's Name"
                    id='guest8'
                    className=' text-xl text-black text-opacity-75 max-w-3xl my-1 leading-relaxed bg-cream
                      block
                      w-full
                      px-0.5
                      border-0 border-b-2 border-gray-200
                      focus:ring-0 focus:border-black'
                    {...register('guest8', {
                      required: { message: 'Please enter their name.', value: true },
                      minLength: { message: "c'mon that's not your name", value: 3 },
                    })}
                  />
                ) : (
                  ''
                )}
                {count >= 8 ? (
                  <input
                    type='text'
                    placeholder="Ninth Guest's Name"
                    id='guest9'
                    className=' text-xl text-black text-opacity-75 max-w-3xl my-1 leading-relaxed bg-cream
                      block
                      w-full
                      px-0.5
                      border-0 border-b-2 border-gray-200
                      focus:ring-0 focus:border-black'
                    {...register('guest9', {
                      required: { message: 'Please enter their name.', value: true },
                      minLength: { message: "c'mon that's not your name", value: 3 },
                    })}
                  />
                ) : (
                  ''
                )}
                {count >= 9 ? (
                  <input
                    type='text'
                    placeholder="Tenth Guest's Name"
                    id='guest10'
                    className=' text-xl text-black text-opacity-75 max-w-3xl my-1 leading-relaxed bg-cream
                      block
                      w-full
                      px-0.5
                      border-0 border-b-2 border-gray-200
                      focus:ring-0 focus:border-black'
                    {...register('guest10', {
                      required: { message: 'Please enter their name.', value: true },
                      minLength: { message: "c'mon that's not your name", value: 3 },
                    })}
                  />
                ) : (
                  ''
                )}
              </div>
              <div className='flex justify-end'>
                <button
                  type={'submit'}
                  disabled={!isValid}
                  className='cursor-pointer text-center inline-block mt-4 font-medium rounded-md text-lg px-10 py-2 bg-black text-cream-light drop-shadow-sm duration-300 ease-in-out hover:scale-95 disabled:hover:scale-100 disabled:bg-opacity-30 '
                >
                  <span>Submit &rarr;</span>
                </button>
              </div>
            </section>
          )}
          {formStep >= 4 && (
            <section>
              <h2 className='font-semibold text-3xl mb-8'>Thank you for RSVPing!</h2>
              {!attending ? (
                <p>
                  While we&apos;re sad that we won&apos;t be able to celebrate with you, we
                  appreciate and love you regardless.
                </p>
              ) : (
                <p className='italic leading-snug'>
                  We can&apos;t wait to
                  <br /> celebrate with you.
                </p>
              )}

              {!attending ? (
                ''
              ) : (
                <div>
                  <p className='border-b font-semibold inline-block'>
                    <a href='/JordanLovesBergen.ics' download>
                      Add to iCal
                    </a>
                  </p>
                  <p className='border-b font-semibold inline-block'>
                    <a
                      target='_blank'
                      href='https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=MDl0MnFsZ25kNHJjcDRuMnBzbW1nN2pjcnIgbGp0cHRrbGxlZXJnNmU5MmhhMGFkNjAwM2NAZw&amp;tmsrc=ljtptklleerg6e92ha0ad6003c%40group.calendar.google.com'
                      rel='noreferrer'
                    >
                      Add to Google Calendar
                    </a>
                  </p>
                  <p>
                    If you have more guests to add,{' '}
                    <button className='border-b  hover:text-opacity-75' onClick={resetForm}>
                      click here
                    </button>
                    .
                  </p>
                </div>
              )}
            </section>
          )}

          {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
        </form>
      </div>
    </div>
  )
}

export default RSVP
