import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect, useState, Component } from 'react'

const client = require('contentful').createClient({
  space: 't0vl274ob8zb',
  accessToken: 'W77l-kOpOQXl929CHRPw9dBXPgQG9v34Pdi0mPJDs0U',
  
})
export default function Home() {

	const [logo, setLogo] = useState(null)
	const [header, setHeader] = useState([])

	
	async function fetchSingleContentTypeData(id) {
		const entry = await client.getEntry(id);
		console.log("Entry",entry.fields);
		if (entry.fields) 
		 return entry.fields
		
	}
	
	
	const [items, setItems] = useState(null)
	    useEffect(() => {
		async function fetchEntry() {
		  const data = await fetchSingleContentTypeData('5lIJ2LFdJuTFvpKUZtil87')
		if('logo' in data)
		{
			setLogo({...data.logo})
		} 
		if('headers' in data){
			setHeader([...data.headers.menu])
		}
		}
		fetchEntry()
	  }, [])
	console.log(header)

	return (
		<div className="relative bg-gray-50">
	<div className="relative bg-white shadow">
		<div className="max-w-7xl mx-auto px-4 sm:px-6">
			<div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
				<div className="w-0 flex-1 flex">
					<a href="#" className="inline-flex">
						<img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg" alt="Workflow"></img>
					</a>
				</div>
				<div className="-mr-2 -my-2 md:hidden">
					<button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
						<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
				</div>
				<nav className="hidden md:flex ">	
				{header !=null &&(
					header.map((item,index)=>{
					<a>{item[index].name}</a>
					})
				)}

					
				  
					<a href="#" className=" ml-4  mr-4 text-base leading-6 font-medium text-gray-500 hover:text-gray-900 transition ease-in-out duration-150">
								Testimonials
                           </a> |
					<a href="#" className=" ml-4  mr-4 text-base leading-6 font-medium text-gray-500 hover:text-gray-900 transition ease-in-out duration-150">
								FookUs
                            </a> |
					<a href="#" className="ml-4 mr-4 text-gray-500 inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 transition ease-in-out duration-150">
								Jobs
                     </a> |
					 <a href="#" className="ml-4  mr-4 text-gray-500 inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 transition ease-in-out duration-150">
								Contact & Press
                     </a>
				</nav>
			
			</div>
		</div>
		<div className="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden">
			<div className="rounded-lg shadow-lg">
				<div className="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50">
					<div className="pt-5 pb-6 px-5 space-y-6">
						<div className="flex items-center justify-between">
							<div>
								<img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg" alt="Workflow"></img>
							</div>
							<div className="-mr-2">
								<button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
									<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
									</svg>
								</button>
							</div>
						</div>
						<div>
							<nav className="grid row-gap-8">
								<a href="#" className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
									<svg className="flex-shrink-0 h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
									</svg>
									<div className="text-base leading-6 font-medium text-gray-900">Analytics</div>
								</a>
								<a href="#" className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
									<svg className="flex-shrink-0 h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
									</svg>
									<div className="text-base leading-6 font-medium text-gray-900">Engagement</div>
								</a>
								<a href="#" className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
									<svg className="flex-shrink-0 h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
									</svg>
									<div className="text-base leading-6 font-medium text-gray-900">Security</div>
								</a>
								<a href="#" className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
									<svg className="flex-shrink-0 h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
									</svg>
									<div className="text-base leading-6 font-medium text-gray-900">Integrations</div>
								</a>
								<a href="#" className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
									<svg className="flex-shrink-0 h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
									</svg>
									<div className="text-base leading-6 font-medium text-gray-900">Automations</div>
								</a>
							</nav>
						</div>
					</div>
					<div className="py-6 px-5 space-y-6">
						<div className="grid grid-cols-2 row-gap-4 col-gap-8">	<a href="#" className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
										Pricing
                </a>
							<a href="#" className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
										Docs
                </a>
							<a href="#" className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
										Enterprise
                </a>
							<a href="#" className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
										Blog
                </a>
							<a href="#" className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
										Help Center
                </a>
							<a href="#" className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
										Guides
                </a>
							<a href="#" className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
										Security
                </a>
							<a href="#" className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
										Events
                </a>
						</div>
						<div className="space-y-6">	<span className="w-full flex rounded-md shadow-sm">
										<a href="#" className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
											Sign up
                  </a>
									</span>
							<p className="text-center text-base leading-6 font-medium text-gray-500">Existing customer? <a href="#" className="text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150">
											Sign in
                  </a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="relative bg-gray-50 px-4 sm:px-6  lg:px-8">
		<div class="absolute inset-0">
			<div class="bg-white h-1/3 sm:h-2/3"></div>
		</div>
		<div class="relative max-w-7xl mx-auto">
			<div class="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
			<div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
					<iframe width="420" height="315"
						src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1">
					</iframe>
			    </div>		
				<div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
				    <iframe width="420" height="315"
						src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1">
					</iframe>
				
				</div>
				<div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
				    <iframe width="420" height="315"
						src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1">
					</iframe>
				
				</div>
			
			</div>
			<div class="text-center mt-8">
				<p class="text-2xl leading-9 tracking-tight text-gray-800 sm:text-4xl sm:leading-10">
							10 Seconds videos news wherever you are !
                </p>
				<p class="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.</p>
			</div>
		</div>
	</div>
	<div class="py-12 bg-white">
		<div class="text-center">
			<h2 class="text-3xl leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
						Main Features and Benefits
      </h2>
			<p class="mt-3  mx-auto  leading-7 text-gray-500 sm:mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
		</div>	
		<div class="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-screen-xl lg:px-8">
			<div class="lg:grid lg:grid-cols-3 lg:gap-8">
				<div>
					<div  class="flex mb-10 mr-5 mt-10 items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white float-left">
						<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
						</svg>
					</div>
					<div class="mt-5">
						<h5 class="text-lg leading-6 font-medium text-gray-900">Competitive exchange rates</h5>
						<p class="mt-2 text-base leading-6 text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
					</div>
				</div>
				<div class="mt-10 lg:mt-0">
					<div class="flex mb-10 mr-5 mt-10 float-left items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
						<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
						</svg>
					</div>
					<div class="mt-5">
						<h5 class="text-lg leading-6 font-medium text-gray-900">No hidden fees</h5>
						<p class="mt-2 text-base leading-6 text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
					</div>
				</div>
				<div class="mt-10 lg:mt-0">
					<div class="flex  mb-10 mr-5 mt-10 float-left items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
						<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
						</svg>
					</div>
					<div class="mt-5">
						<h5 class="text-lg leading-6 font-medium text-gray-900">Transfers are instant</h5>
						<p class="mt-2 text-base leading-6 text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="bg-white">
		<div class="max-w-screen-xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">

			<p class=" ml-40 mr-40 text-3xl leading-9  justify-center  tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
						A Little CTA about why user to want to download our app  Start your free trial today.
		    </p>    
	    <div class="float-left h-48 w-60	 text-center ">
			phone screen

		</div>
      	<div class="mt-8 flex flex-col  justify-center">
			   <div class=" text-gray-700 text-center ">
			   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione
				</div>
				<div class=" justify-center m-4">
						<div class="inline-flex rounded-md shadow">	<a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-600 hover:bg-gray-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
										Download iOS
							</a>
						</div>
						<div class="ml-3 inline-flex">	<a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-600 hover:bg-gray-500  focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
										Download Android
						</a>
						</div>
				</div>
			</div>
		</div>
	</div>
	<div class="py-12 bg-white">
		<div class="text-center">
			<p class="text-3xl leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
						Testimonials/5 star reviews slider
             </p>
		</div>
		<div class="relative max-w-7xl mx-auto">
			<div class="mt-12 grid gap-7 overflow-x-auto max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
				<div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
					<div class="flex-1 bg-white p-6 flex flex-col justify-between">
						<div class="flex-1">
							<p class="text-sm leading-5 font-medium text-indigo-600">	<a href="#" class="hover:underline">
											Blog
              							</a>
							</p>
							<a href="#" class="block">
								<h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
											Boost your conversion rate
              							</h3>
								<p class="mt-3 text-base leading-6 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.</p>
							</a>
						</div>
						<div class="mt-6 flex items-center">
							<div class="ml-3">
								<p class="text-sm leading-5 font-medium text-gray-900">	<a href="#" class="hover:underline">
												Roel Aufderhar
                							</a>
								</p>
								<div class="flex text-sm leading-5 text-gray-500">
									<time datetime="2020-03-16">Mar 16, 2020</time>	<span class="mx-1">
												&middot;
                							</span>
									<span>
												6 min read
                							</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
					<div class="flex-1 bg-white p-6 flex flex-col justify-between">
						<div class="flex-1">
							<p class="text-sm leading-5 font-medium text-indigo-600">	<a href="#" class="hover:underline">
											Video
              </a>
							</p>
							<a href="#" class="block">
								<h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
											How to use search engine optimization to drive sales
              </h3>
								<p class="mt-3 text-base leading-6 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.</p>
							</a>
						</div>
						<div class="mt-6 flex items-center">
							<div class="ml-3">
								<p class="text-sm leading-5 font-medium text-gray-900">	<a href="#" class="hover:underline">
												Brenna Goyette
                </a>
								</p>
								<div class="flex text-sm leading-5 text-gray-500">
									<time datetime="2020-03-16">Mar 16, 2020</time>	<span class="mx-1">
												&middot;
                </span>
									<span>
												6 min read
                </span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
					<div class="flex-1 bg-white p-6 flex flex-col justify-between">
						<div class="flex-1">
							<p class="text-sm leading-5 font-medium text-indigo-600">	<a href="#" class="hover:underline"> Case Study</a>
							</p>
							<a href="#" class="block">
								<h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
											Improve your customer experience
              </h3>
								<p class="mt-3 text-base leading-6 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.</p>
							</a>
						</div>
						<div class="mt-6 flex items-center">
							<div class="ml-3">
								<p class="text-sm leading-5 font-medium text-gray-900">	<a href="#" class="hover:underline">
												Daniela Metz
                </a>
								</p>
								<div class="flex text-sm leading-5 text-gray-500">
									<time datetime="2020-03-16">Mar 16, 2020</time>	<span class="mx-1">
												&middot;
                </span>
									<span>
												6 min read
                </span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
		<div class="relative max-w-xl mx-auto">
			<svg class="absolute left-full transform translate-x-1/2" width="404" height="404" fill="none" viewBox="0 0 404 404">
				<defs>
					<pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
						<rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor"></rect>
					</pattern>
				</defs>
				<rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"></rect>
			</svg>
			<svg class="absolute right-full bottom-0 transform -translate-x-1/2" width="404" height="404" fill="none" viewBox="0 0 404 404">
				<defs>
					<pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
						<rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor"></rect>
					</pattern>
				</defs>
				<rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"></rect>
			</svg>
			<div class="text-center">
				<p class="text-3xl leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
							Get In Touch/Feedback
               </p>
				<p class="mt-4 text-lg leading-6 text-gray-500">Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.</p>
			</div>
			<div class="mt-12">
				<form action="#" method="POST" class="grid grid-cols-1 row-gap-6 sm:grid-cols-2 sm:col-gap-8">
					{/* <div>
						<label for="first_name" class="block text-sm font-medium leading-5 text-gray-700">First name</label>
						<div class="mt-1 relative rounded-md shadow-sm">
							<input id="first_name" class="form-input py-3 px-4 block w-full transition ease-in-out duration-150"></input>
						</div>
					</div>
					<div>
						<label for="last_name" class="block text-sm font-medium leading-5 text-gray-700">Last name</label>
						<div class="mt-1 relative rounded-md shadow-sm">
							<input id="last_name" class="form-input py-3 px-4 block w-full transition ease-in-out duration-150"></input>
						</div>
					</div>
					<div class="sm:col-span-2">
						<label for="company" class="block text-sm font-medium leading-5 text-gray-700">Company</label>
						<div class="mt-1 relative rounded-md shadow-sm">
							<input id="company" class="form-input py-3 px-4 block w-full transition ease-in-out duration-150"></input>
						</div>
					</div>
					<div class="sm:col-span-2">
						<label for="email" class="block text-sm font-medium leading-5 text-gray-700">Email</label>
						<div class="mt-1 relative rounded-md shadow-sm">
							<input id="email" type="email" class="form-input py-3 px-4 block w-full transition ease-in-out duration-150"></input>
						</div>
					</div>
					<div class="sm:col-span-2">
						<label for="phone_number" class="block text-sm font-medium leading-5 text-gray-700">Phone Number</label>
						<div class="mt-1 relative rounded-md shadow-sm">
							<div class="absolute inset-y-0 left-0 flex items-center">
								<select aria-label="Country" class="form-select h-full py-0 pl-4 pr-8 border-transparent bg-transparent text-gray-500 transition ease-in-out duration-150">
									<option>US</option>
									<option>CA</option>
									<option>EU</option>
								</select>
							</div>
							<input id="phone_number" class="form-input py-3 px-4 block w-full pl-20 transition ease-in-out duration-150" placeholder="+1 (555) 987-6543"></input>
						</div>
					</div> */}
					<div class="sm:col-span-2">
						<label for="message" class="block text-sm font-medium leading-5 text-gray-700">Message</label>
						<div class="mt-1 relative rounded-md shadow-sm">
							<textarea id="message" rows="4" class="form-textarea py-3 px-4 block w-full transition ease-in-out duration-150"></textarea>
						</div>
					</div>
					
					<div class="sm:col-span-2">	<span class="w-full inline-flex rounded-md shadow-sm">
					<div>
						<label for="first_name" class="block text-sm font-medium leading-5 text-gray-700">First name</label>
						<div class="mt-1 relative rounded-md shadow-sm">
							<input id="first_name" class="form-input py-3 px-4 block w-full transition ease-in-out duration-150"></input>
						</div>
					</div>
					<div>
						<label for="last_name" class="block text-sm font-medium leading-5 text-gray-700">Last name</label>
						<div class="mt-1 relative rounded-md shadow-sm">
							<input id="last_name" class="form-input py-3 px-4 block w-full transition ease-in-out duration-150"></input>
						</div>
					</div>
					<div>
						<label for="" class="block text-sm font-medium leading-5 text-gray-700"></label>
						<div class="mt-1 relative rounded-md shadow-sm">
						<button type="button" class=" mt-4 text-white  bg-gray-600 hover:bg-gray-500 form-input py-4 px-4 block w-full transition ease-in-out duration-150">
					     Send 
					   </button>
						</div>
					</div>
					
								</span>
					</div>
				</form>
			</div>
		</div>
	</div>
	<div class="bg-white">
		<div class="max-w-screen-xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
			<h2 class="text-3xl leading-9  tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
						Your video could be the news!
          </h2>
			<p class="mt-6 text-lg leading-6 text-gray-500">Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.</p>
			<div class="mt-8 flex justify-center">	<span class="mx-auto rounded-md shadow-sm ">
							<button type="button" class="content-center text-white  bg-gray-600 hover:bg-gray-500  font-bold py-2 px-4 rounded inline-flex items-center">
								Request Access
                </button>
						</span>
			</div>
		</div>
	</div>
	<div class="bg-white">
		<div class="max-w-screen-xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
			<nav class="-mx-5 -my-2 flex flex-wrap justify-center">
				<div class="px-5 py-2">	<a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
								Feature
                 </a> | 
				</div>
				<div class="px-5 py-2">	<a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
								Testimonials
                 </a>  |
				</div>
				<div class="px-5 py-2">	<a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
								Jobs
        </a>   |
				</div>
				<div class="px-5 py-2">	<a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
								Fookus
        </a>  |
				</div>
				<div class="px-5 py-2">	<a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
								Jobs
        </a>  |
				</div>
				<div class="px-5 py-2">	<a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
								Contact & press
        </a>
				</div>
			</nav>
			<div class="mt-8 flex justify-center">
				<a href="#" class="text-gray-400 hover:text-gray-500">	<span class="sr-only">Facebook</span>
					<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
						<path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
					</svg>
				</a>
				<a href="#" class="ml-6 text-gray-400 hover:text-gray-500">	<span class="sr-only">Instagram</span>
					<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
						<path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
					</svg>
				</a>
				<a href="#" class="ml-6 text-gray-400 hover:text-gray-500">	<span class="sr-only">Twitter</span>
					<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
						<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
					</svg>
				</a>
				<a href="#" class="ml-6 text-gray-400 hover:text-gray-500">	<span class="sr-only">GitHub</span>
					<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
						<path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
					</svg>
				</a>
				<a href="#" class="ml-6 text-gray-400 hover:text-gray-500">	<span class="sr-only">Dribbble</span>
					<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
						<path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" />
					</svg>
				</a>
			</div>
			<div class="mt-8">
				<p class="text-center text-base leading-6 text-gray-400">&copy; 2020 Workflow, Inc. All rights reserved.</p>
			</div>
		</div>
	</div>
</div>


	)
}
