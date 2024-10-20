import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

// const user = {
//   name: 'Tom Cook',
//   email: 'tom@example.com',
//   imageUrl:
//     'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
// }
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
  { name: 'Reports', href: '#', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '/login' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Home({ user, home }) {
  //this is the response data from the useEffect in App.jsx
  //I need to pass this data to Home
  //I need to display the props passed from App.jsx
  // const home = (
  //   <div>
  //     <h1>Home</h1>
  //   </div>
  // )

  return (
    <>

      <div className="min-h-full">
        {/* <h1>{home}</h1>
        <h2>{user.name}</h2> */}
        <Disclosure as="nav" className="bg-gray-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link to="/">
                    <img
                      alt="Your Company"
                      src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                      className="h-8 w-8"
                    />
                  </Link>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? 'page' : undefined}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium',
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <button
                    type="button"
                    className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <BellIcon aria-hidden="true" className="h-6 w-6" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img alt="" src="./src/assets/IMG_9834.jpg" className="h-8 w-8 rounded-full" />
                      </MenuButton>
                    </div>
                    <MenuItems
                      transition
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      {userNavigation.map((item) => (
                        <MenuItem key={item.name}>
                          <Link
                            to={item.href}
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                          >
                            {item.name}
                          </Link>
                        </MenuItem>
                      ))}
                    </MenuItems>
                  </Menu>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                  <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium',
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
            <div className="border-t border-gray-700 pb-3 pt-4">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <img alt="" src="./src/assets/IMG_9834.heic" className="h-10 w-10 rounded-full" />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium leading-none text-white">{user.name}</div>
                  <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                </div>
                <button
                  type="button"
                  className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>
              <div className="mt-3 space-y-1 px-2">
                {userNavigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
            </div>
          </DisclosurePanel>
        </Disclosure>

        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div>
              <h1 className="text-3xl tracking-tight text-gray-900">Dashboard: </h1>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                Welcome, {user.name}
              </h1>
            </div>
            {/* <div className="flex justify-center p-5"> */}
                  <img alt="" src="./src/assets/IMG_9834.jpg" className="h-20 w-16 rounded-full justify-self-center" />
                {/* </div> */}
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 inline-flex w-screen justify-around">
            {/* Replace with your content */}
            {/* <div className="px-4 py-6 sm:px-0 w-5/12">
              <section>
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" > 
              <h1>{home}</h1>
              <h2>{user.name}</h2>
              </div>
              </section>
            </div > */}
            <div className="px-4 py-6 sm:px-0 w-full">
              <section>
              <div className="border-4 border-dashed border-gray-200 rounded-lg">
                <div class="mx-auto bg-white p-6 rounded-lg shadow-md w-9/12">
                {/* <div className="flex justify-center p-5">
                  <img alt="" src="./src/assets/IMG_9834.jpg" className="h-20 w-16 rounded-full justify-self-center" />
                </div> */}
    <h1 className="text-3xl font-bold text-blue-700 mb-4">Google Gemini's Financial Plan for Edgar</h1>

    <h2 className="text-xl font-semibold text-gray-800 mb-2">Personal Information</h2>
    <ul className="list-none pl-0 mb-4">
        <li className="mb-2"><strong class="text-gray-600">Age:</strong> 22</li>
        <li><strong className="text-gray-600">Annual Income:</strong> $50,000</li>
    </ul>

    <h2 class="text-xl font-semibold text-gray-800 mb-2">Monthly Expenses</h2>
    <ul class="list-none pl-0 mb-4">
        <li class="mb-1"><strong class="text-gray-600">Rent:</strong> $700</li>
        <li class="mb-1"><strong class="text-gray-600">Food:</strong> $200</li>
        <li class="mb-1"><strong class="text-gray-600">Utilities:</strong> $100</li>
        <li><strong class="text-gray-600">Car payment:</strong> $500</li>
    </ul>
    <p class="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-4"><strong>Total Monthly Expenses:</strong> $1,500</p>

    <p class="mb-4"><strong>Monthly Income after Expenses:</strong> $35,000 / 12 = $2,916</p>

    <h2 class="text-xl font-semibold text-gray-800 mb-2">Financial Goals</h2>
    <ul class="list-none pl-0 mb-4">
        <li>Save for retirement (e.g., 401(k) or IRA)</li>
        <li>Build an emergency fund</li>
        <li>Pay down high-interest debt (e.g., credit card debt)</li>
    </ul>

    <h2 class="text-xl font-semibold text-gray-800 mb-2">Savings Plan</h2>
    <ul class="list-none pl-0 mb-4">
        <li><strong class="text-gray-600">Retirement:</strong> Contribute $300 per month to a 401(k) or IRA.</li>
        <li><strong class="text-gray-600">Emergency fund:</strong> Save $100 per month.</li>
        <li><strong class="text-gray-600">Debt repayment:</strong> Allocate $200 per month.</li>
    </ul>

    <h2 class="text-xl font-semibold text-gray-800 mb-2">Revised Monthly Budget</h2>
    <ul class="list-none pl-0 mb-4">
        <li><strong class="text-gray-600">Monthly Expenses:</strong> $1,500</li>
        <li><strong class="text-gray-600">Savings (retirement):</strong> $300</li>
        <li><strong class="text-gray-600">Savings (emergency fund):</strong>$100</li>
        <li><strong class="text-gray-600">Debt repayment:</strong>$200</li>
        <li><strong class="text-gray-600">Remaining balance:</strong>$816</li>
    </ul>
    </div>
              </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
