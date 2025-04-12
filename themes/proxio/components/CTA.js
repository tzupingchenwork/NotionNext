import { siteConfig } from '@/lib/config'
import Link from 'next/link'

/**
 * CTA，用于创建一个呼吁用户行动的部分（Call To Action，简称 CTA）。
 * 该组件通过以下方式激励用户进行特定操作
 * 用户的公告栏内容将在此显示
 **/
export const CTA = () => {
  if (!siteConfig('PROXIO_CTA_ENABLE')) {
    return <></>
  }
  return (
    <>
      {/* <!-- ====== CTA Section Start --> */}
      <section className='relative z-10 overflow-hidden bg-gray-1 dark:bg-dark-2 py-20 lg:py-[115px]'>
        <div className='container mx-auto'>
          <div className='relative overflow-hidden'>
            <div className='-mx-4 flex flex-wrap items-stretch'>
              <div className='w-full px-4 mb-2'>
                <div className='mx-auto max-w-[570px] text-center'>
                  <h2 className='mb-2.5 text-3xl font-bold dark:text-white md:text-[38px] md:leading-[1.44]'>
                    <span>{siteConfig('PROXIO_CTA_TITLE')}</span>
                    <span className='text-3xl font-normal md:text-[40px]'>
                      {siteConfig('PROXIO_CTA_TITLE_2')}
                    </span>
                  </h2>
                  <p className='mx-auto mb-6 max-w-[515px] text-base leading-[1.5] dark:text-white'>
                    {siteConfig('PROXIO_CTA_DESCRIPTION')}
                  </p>
                  {siteConfig('PROXIO_CTA_BUTTON') && (
                    <>
                      <Link
                        href={siteConfig('PROXIO_CTA_BUTTON_URL', '')}
                        className='inline-flex items-center justify-center rounded-2xl bg-white px-7 py-[14px] text-center text-base font-medium text-dark shadow-1 transition duration-300 ease-in-out hover:bg-gray-2'>
                        {siteConfig('PROXIO_CTA_BUTTON_TEXT')}
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className='absolute left-0 top-0'>
            <svg
              width='495'
              height='470'
              viewBox='0 0 495 470'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <circle
                cx='55'
                cy='442'
                r='138'
                stroke='white'
                stroke-opacity='0.04'
                stroke-width='50'
              />
              <circle
                cx='446'
                r='39'
                stroke='white'
                stroke-opacity='0.04'
                stroke-width='20'
              />
              <path
                d='M245.406 137.609L233.985 94.9852L276.609 106.406L245.406 137.609Z'
                stroke='white'
                stroke-opacity='0.08'
                stroke-width='12'
              />
            </svg>
          </span>
          <span className='absolute bottom-0 right-0'>
            <svg
              width='493'
              height='470'
              viewBox='0 0 493 470'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <circle
                cx='462'
                cy='5'
                r='138'
                stroke='white'
                stroke-opacity='0.04'
                stroke-width='50'
              />
              <circle
                cx='49'
                cy='470'
                r='39'
                stroke='white'
                stroke-opacity='0.04'
                stroke-width='20'
              />
              <path
                d='M222.393 226.701L272.808 213.192L259.299 263.607L222.393 226.701Z'
                stroke='white'
                stroke-opacity='0.06'
                stroke-width='13'
              />
            </svg>
          </span>
        </div>
      </section>
      {/* <!-- ====== CTA Section End --> */}
    </>
  )
}
