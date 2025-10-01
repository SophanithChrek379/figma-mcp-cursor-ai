import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-5">
          <div className="flex items-center justify-between relative">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-[28px] font-extrabold text-[#164364] lowercase font-['Syne',_sans-serif]">
                TechStore
              </h1>
            </div>

            {/* Navigation Links - Centered */}
            <nav className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center space-x-10">
              <button className="flex items-center space-x-1.5 group">
                <span className="text-[15px] font-bold text-[#164364] font-['Space_Mono',_sans-serif]">Home</span>
                <svg className="w-4 h-4 text-[#164364]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <button className="flex items-center space-x-1.5 group">
                <span className="text-[15px] font-bold text-[#164364] font-['Space_Mono',_sans-serif]">Products</span>
                <svg className="w-4 h-4 text-[#164364]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <button className="flex items-center space-x-1.5 group">
                <span className="text-[15px] font-bold text-[#164364] font-['Space_Mono',_sans-serif]">Deals</span>
                <svg className="w-4 h-4 text-[#164364]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <button className="flex items-center space-x-1.5 group">
                <span className="text-[15px] font-bold text-[#164364] font-['Space_Mono',_sans-serif]">Support</span>
                <svg className="w-4 h-4 text-[#164364]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <button className="flex items-center space-x-1.5 group">
                <span className="text-[15px] font-bold text-[#164364] font-['Space_Mono',_sans-serif]">Contact</span>
                <svg className="w-4 h-4 text-[#164364]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                </button>
            </nav>

            {/* Action Icons */}
            <div className="flex items-center space-x-8">
              <button className="w-6 h-6 text-[#164364] hover:text-blue-600 transition-colors">
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="w-6 h-6 text-[#164364] hover:text-blue-600 transition-colors">
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
              <button className="w-6 h-6 text-[#164364] hover:text-blue-600 transition-colors">
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4">
      {/* Hero Section */}
        <section className="bg-[#ecf6fe] flex flex-col gap-[52px] items-center py-[96px] rounded-[22px] mt-8">
          <h1 className="font-bold text-[#164364] text-[120px] text-center tracking-[-2.4px] w-full leading-[120px] font-['Plus_Jakarta_Sans',_sans-serif]">
            Discover the Latest in Computing Technology
          </h1>
          <div className="h-[672px] w-full relative rounded-[22px] overflow-hidden">
            <Image 
              alt="Latest computing technology showcase with gaming setup" 
              src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80"
              fill
              className="object-cover rounded-[22px]"
              priority
            />
            <div className="absolute inset-0 border border-[#495f6e] rounded-[22px] pointer-events-none"></div>
          </div>
        </section>

        {/* Product Carousel Section */}
        <section className="bg-[#ecf6fe] flex flex-col gap-[32px] py-[52px] rounded-[22px] mt-8 relative overflow-hidden">
          {/* Product Cards Container */}
          <div className="flex gap-[32px] overflow-x-auto scrollbar-hide px-4">
            {/* Product Card 1 - Gaming Laptop */}
            <div className="flex flex-col gap-[14px] w-[336px] flex-shrink-0">
              <div className="h-[336px] w-full relative rounded-[22px] overflow-hidden">
                <Image 
                  alt="Gaming Laptop" 
                  src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  fill
                  className="object-cover rounded-[22px]"
                />
                <div className="absolute inset-0 border border-[#495f6e] rounded-[22px] pointer-events-none"></div>
              </div>
              <div className="flex flex-col text-[#164364] text-[15px] leading-[20px]">
                <h3 className="font-semibold font-['Familjen_Grotesk',_sans-serif] truncate">Gaming Laptop</h3>
                <p className="font-normal font-['Familjen_Grotesk',_sans-serif]">$1,299</p>
              </div>
              <div className="flex gap-[14px] items-center h-[32px]">
                <div className="w-[32px] h-[24px] bg-red-500 rounded-sm"></div>
                <div className="w-[32px] h-[24px] bg-blue-500 rounded-sm"></div>
              </div>
            </div>

            {/* Product Card 2 - Ultrabook */}
            <div className="flex flex-col gap-[14px] w-[336px] flex-shrink-0">
              <div className="h-[336px] w-full relative rounded-[22px] overflow-hidden">
                <Image 
                  alt="Ultrabook" 
                  src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  fill
                  className="object-cover rounded-[22px]"
                />
                <div className="absolute inset-0 border border-[#495f6e] rounded-[22px] pointer-events-none"></div>
              </div>
              <div className="flex flex-col text-[#164364] text-[15px] leading-[20px]">
                <h3 className="font-semibold font-['Familjen_Grotesk',_sans-serif] truncate">Ultrabook</h3>
                <p className="font-normal font-['Familjen_Grotesk',_sans-serif]">$999</p>
              </div>
              <div className="flex gap-[14px] items-center h-[32px]">
                <div className="w-[32px] h-[24px] bg-slate-500 rounded-sm"></div>
                <div className="w-[32px] h-[24px] bg-gray-500 rounded-sm"></div>
              </div>
            </div>

            {/* Product Card 3 - Desktop PC */}
            <div className="flex flex-col gap-[14px] w-[336px] flex-shrink-0">
              <div className="h-[336px] w-full relative rounded-[22px] overflow-hidden">
                <Image 
                  alt="Desktop PC" 
                  src="https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  fill
                  className="object-cover rounded-[22px]"
                />
                <div className="absolute inset-0 border border-[#495f6e] rounded-[22px] pointer-events-none"></div>
              </div>
              <div className="flex flex-col text-[#164364] text-[15px] leading-[20px]">
                <h3 className="font-semibold font-['Familjen_Grotesk',_sans-serif] truncate">Desktop PC</h3>
                <p className="font-normal font-['Familjen_Grotesk',_sans-serif]">$799</p>
              </div>
              <div className="flex gap-[14px] items-center h-[32px]">
                <div className="w-[32px] h-[24px] bg-black rounded-sm"></div>
                <div className="w-[32px] h-[24px] bg-white border border-gray-300 rounded-sm"></div>
              </div>
            </div>

            {/* Product Card 4 - Tablet */}
            <div className="flex flex-col gap-[14px] w-[336px] flex-shrink-0">
              <div className="h-[336px] w-full relative rounded-[22px] overflow-hidden">
                <Image 
                  alt="Tablet" 
                  src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  fill
                  className="object-cover rounded-[22px]"
                />
                <div className="absolute inset-0 border border-[#495f6e] rounded-[22px] pointer-events-none"></div>
              </div>
              <div className="flex flex-col text-[#164364] text-[15px] leading-[20px]">
                <h3 className="font-semibold font-['Familjen_Grotesk',_sans-serif] truncate">Tablet</h3>
                <p className="font-normal font-['Familjen_Grotesk',_sans-serif]">$499</p>
              </div>
              <div className="flex gap-[14px] items-center h-[32px]">
                <div className="w-[32px] h-[24px] bg-slate-400 rounded-sm"></div>
                <div className="w-[32px] h-[24px] bg-rose-400 rounded-sm"></div>
              </div>
            </div>

            {/* Product Card 5 - Smartphone */}
            <div className="flex flex-col gap-[14px] w-[336px] flex-shrink-0">
              <div className="h-[336px] w-full relative rounded-[22px] overflow-hidden">
                <Image 
                  alt="Smartphone" 
                  src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  fill
                  className="object-cover rounded-[22px]"
                />
                <div className="absolute inset-0 border border-[#495f6e] rounded-[22px] pointer-events-none"></div>
              </div>
              <div className="flex flex-col text-[#164364] text-[15px] leading-[20px]">
                <h3 className="font-semibold font-['Familjen_Grotesk',_sans-serif] truncate">Smartphone</h3>
                <p className="font-normal font-['Familjen_Grotesk',_sans-serif]">$699</p>
              </div>
              <div className="flex gap-[14px] items-center h-[32px]">
                <div className="w-[32px] h-[24px] bg-indigo-500 rounded-sm"></div>
                <div className="w-[32px] h-[24px] bg-purple-500 rounded-sm"></div>
              </div>
            </div>

            {/* Product Card 6 - Smartwatch */}
            <div className="flex flex-col gap-[14px] w-[336px] flex-shrink-0">
              <div className="h-[336px] w-full relative rounded-[22px] overflow-hidden">
                <Image 
                  alt="Smartwatch" 
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  fill
                  className="object-cover rounded-[22px]"
                />
                <div className="absolute inset-0 border border-[#495f6e] rounded-[22px] pointer-events-none"></div>
              </div>
              <div className="flex flex-col text-[#164364] text-[15px] leading-[20px]">
                <h3 className="font-semibold font-['Familjen_Grotesk',_sans-serif] truncate">Smartwatch</h3>
                <p className="font-normal font-['Familjen_Grotesk',_sans-serif]">$199</p>
              </div>
              <div className="flex gap-[14px] items-center h-[32px]">
                <div className="w-[32px] h-[24px] bg-red-500 rounded-sm"></div>
                <div className="w-[32px] h-[24px] bg-green-500 rounded-sm"></div>
              </div>
          </div>
        </div>

          {/* Navigation Arrow Button */}
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <button className="bg-[#ecf6fe] p-[10px] rounded-[22px] shadow-[0px_1.5px_4px_0px_rgba(0,0,0,0.16)] hover:shadow-lg transition-shadow">
              <svg className="w-5 h-5 text-[#164364]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
                </div>

          {/* Divider */}
          <div className="absolute bottom-0 left-0 right-0 h-px">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-[#495f6e] to-transparent"></div>
        </div>
        </section>

        {/* Product Grid Section */}
        <section className="bg-[#ecf6fe] flex flex-col pb-[52px] pt-0 relative">
          {/* Filters */}
          <div className="flex flex-col gap-[32px] items-start justify-center px-0 py-[32px]">
            <div className="flex items-center justify-between w-full">
              <div className="flex gap-[14px] items-start">
                <button className="bg-[#ecf6fe] border border-[#085791] rounded-[22px] px-[20px] py-[10px] flex items-center gap-[10px]">
                  <span className="text-[15px] font-bold text-[#164364] font-['Space_Mono',_sans-serif]">Category</span>
                  <svg className="w-4 h-4 text-[#164364]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <button className="bg-[#ecf6fe] border border-[#085791] rounded-[22px] px-[20px] py-[10px] flex items-center gap-[10px]">
                  <span className="text-[15px] font-bold text-[#164364] font-['Space_Mono',_sans-serif]">Price</span>
                  <svg className="w-4 h-4 text-[#164364]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <button className="bg-[#ecf6fe] border border-[#085791] rounded-[22px] px-[20px] py-[10px] flex items-center gap-[10px]">
                  <span className="text-[15px] font-bold text-[#164364] font-['Space_Mono',_sans-serif]">Brand</span>
                  <svg className="w-4 h-4 text-[#164364]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              <p className="text-[15px] font-normal text-[#164364] font-['Familjen_Grotesk',_sans-serif] text-right">
                100+
              </p>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex flex-col gap-[52px] items-start relative w-full">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] w-full">
              <div className="flex flex-col gap-[14px]">
                <div className="h-[432px] w-full relative rounded-[22px] overflow-hidden">
                  <Image 
                    alt="High-Performance CPU" 
                    src="https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    fill
                    className="object-cover rounded-[22px]"
                  />
                  <div className="absolute inset-0 border border-[#495f6e] rounded-[22px] pointer-events-none"></div>
                </div>
                <div className="flex flex-col text-[#164364] text-[15px] leading-[20px]">
                  <h3 className="font-semibold font-['Familjen_Grotesk',_sans-serif] truncate">High-Performance CPU</h3>
                  <p className="font-normal font-['Familjen_Grotesk',_sans-serif]">$299</p>
                </div>
              </div>

              <div className="flex flex-col gap-[14px]">
                <div className="h-[432px] w-full relative rounded-[22px] overflow-hidden">
                  <Image 
                    alt="Graphics Card" 
                    src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    fill
                    className="object-cover rounded-[22px]"
                  />
                  <div className="absolute inset-0 border border-[#495f6e] rounded-[22px] pointer-events-none"></div>
                </div>
                <div className="flex flex-col text-[#164364] text-[15px] leading-[20px]">
                  <h3 className="font-semibold font-['Familjen_Grotesk',_sans-serif] truncate">Graphics Card</h3>
                  <p className="font-normal font-['Familjen_Grotesk',_sans-serif]">$499</p>
                </div>
              </div>

              <div className="flex flex-col gap-[14px]">
                <div className="h-[432px] w-full relative rounded-[22px] overflow-hidden">
                  <Image 
                    alt="SSD Drive" 
                    src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    fill
                    className="object-cover rounded-[22px]"
                  />
                  <div className="absolute inset-0 border border-[#495f6e] rounded-[22px] pointer-events-none"></div>
                </div>
                <div className="flex flex-col text-[#164364] text-[15px] leading-[20px]">
                  <h3 className="font-semibold font-['Familjen_Grotesk',_sans-serif] truncate">SSD Drive</h3>
                  <p className="font-normal font-['Familjen_Grotesk',_sans-serif]">$129</p>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] w-full">
              <div className="flex flex-col gap-[14px]">
                <div className="h-[432px] w-full relative rounded-[22px] overflow-hidden">
                  <Image 
                    alt="RAM Module" 
                    src="https://images.unsplash.com/photo-1562976540-1502c2145186?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    fill
                    className="object-cover rounded-[22px]"
                  />
                  <div className="absolute inset-0 border border-[#495f6e] rounded-[22px] pointer-events-none"></div>
                </div>
                <div className="flex flex-col text-[#164364] text-[15px] leading-[20px]">
                  <h3 className="font-semibold font-['Familjen_Grotesk',_sans-serif] truncate">RAM Module</h3>
                  <p className="font-normal font-['Familjen_Grotesk',_sans-serif]">$89</p>
                </div>
              </div>

              <div className="flex flex-col gap-[14px]">
                <div className="h-[432px] w-full relative rounded-[22px] overflow-hidden">
                  <Image 
                    alt="Motherboard" 
                    src="https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    fill
                    className="object-cover rounded-[22px]"
                  />
                  <div className="absolute inset-0 border border-[#495f6e] rounded-[22px] pointer-events-none"></div>
                </div>
                <div className="flex flex-col text-[#164364] text-[15px] leading-[20px]">
                  <h3 className="font-semibold font-['Familjen_Grotesk',_sans-serif] truncate">Motherboard</h3>
                  <p className="font-normal font-['Familjen_Grotesk',_sans-serif]">$199</p>
                </div>
              </div>

              <div className="flex flex-col gap-[14px]">
                <div className="h-[432px] w-full relative rounded-[22px] overflow-hidden">
                  <Image 
                    alt="Cooling Fan" 
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    fill
                    className="object-cover rounded-[22px]"
                  />
                  <div className="absolute inset-0 border border-[#495f6e] rounded-[22px] pointer-events-none"></div>
                </div>
                <div className="flex flex-col text-[#164364] text-[15px] leading-[20px]">
                  <h3 className="font-semibold font-['Familjen_Grotesk',_sans-serif] truncate">Smartwatch</h3>
                  <p className="font-normal font-['Familjen_Grotesk',_sans-serif]">$199</p>
                </div>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] w-full">
              <div className="flex flex-col gap-[14px]">
                <div className="h-[432px] w-full relative rounded-[22px] overflow-hidden">
                  <Image 
                    alt="Power Supply Unit" 
                    src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    fill
                    className="object-cover rounded-[22px]"
                  />
                  <div className="absolute inset-0 border border-[#495f6e] rounded-[22px] pointer-events-none"></div>
                </div>
                <div className="flex flex-col text-[#164364] text-[15px] leading-[20px]">
                  <h3 className="font-semibold font-['Familjen_Grotesk',_sans-serif] truncate">Power Supply Unit</h3>
                  <p className="font-normal font-['Familjen_Grotesk',_sans-serif]">$99</p>
                </div>
              </div>

              <div className="flex flex-col gap-[14px]">
                <div className="h-[432px] w-full relative rounded-[22px] overflow-hidden">
                  <Image 
                    alt="Monitor" 
                    src="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    fill
                    className="object-cover rounded-[22px]"
                  />
                  <div className="absolute inset-0 border border-[#495f6e] rounded-[22px] pointer-events-none"></div>
                </div>
                <div className="flex flex-col text-[#164364] text-[15px] leading-[20px]">
                  <h3 className="font-semibold font-['Familjen_Grotesk',_sans-serif] truncate">Monitor</h3>
                  <p className="font-normal font-['Familjen_Grotesk',_sans-serif]">$179</p>
                </div>
              </div>

              <div className="flex flex-col gap-[14px]">
                <div className="h-[432px] w-full relative rounded-[22px] overflow-hidden">
                  <Image 
                    alt="Keyboard" 
                    src="https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    fill
                    className="object-cover rounded-[22px]"
                  />
                  <div className="absolute inset-0 border border-[#495f6e] rounded-[22px] pointer-events-none"></div>
                </div>
                <div className="flex flex-col text-[#164364] text-[15px] leading-[20px]">
                  <h3 className="font-semibold font-['Familjen_Grotesk',_sans-serif] truncate">Keyboard</h3>
                  <p className="font-normal font-['Familjen_Grotesk',_sans-serif]">$49</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex items-start justify-end pt-[68px] w-full">
            <div className="flex items-center gap-2">
              <button className="bg-[#0d99ff] rounded-[22px] p-[10px] w-[40px] h-[40px] flex items-center justify-center">
                <span className="text-[15px] font-bold text-[#000305] font-['Space_Mono',_sans-serif]">1</span>
              </button>
              <button className="rounded-[22px] p-[10px] w-[40px] h-[40px] flex items-center justify-center hover:bg-gray-100 transition-colors">
                <span className="text-[15px] font-bold text-[#164364] font-['Space_Mono',_sans-serif]">2</span>
              </button>
              <button className="rounded-[22px] p-[10px] w-[40px] h-[40px] flex items-center justify-center hover:bg-gray-100 transition-colors">
                <span className="text-[15px] font-bold text-[#164364] font-['Space_Mono',_sans-serif]">3</span>
              </button>
              <button className="rounded-[22px] p-[10px] w-[40px] h-[40px] flex items-center justify-center hover:bg-gray-100 transition-colors">
                <span className="text-[15px] font-bold text-[#164364] font-['Space_Mono',_sans-serif]">4</span>
              </button>
              <button className="rounded-[22px] p-[10px] w-[40px] h-[40px] flex items-center justify-center hover:bg-gray-100 transition-colors">
                <span className="text-[15px] font-bold text-[#164364] font-['Space_Mono',_sans-serif]">5</span>
              </button>
              <button className="bg-[#ecf6fe] rounded-[22px] p-[10px] w-[40px] h-[40px] flex items-center justify-center hover:bg-gray-100 transition-colors">
                <svg className="w-5 h-5 text-[#164364]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-[#ecf6fe] mt-24">
        <div className="container mx-auto px-4 py-[52px]">
          {/* Decorative Container Element */}
          <div className="h-2 w-full mb-5 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 rounded-full"></div>
          </div>
          
          {/* Footer Content */}
          <div className="flex flex-col lg:flex-row gap-[52px] items-start">
            {/* Logo and Social Icons */}
            <div className="flex flex-col gap-[14px]">
              <div className="flex items-center">
                <h2 className="text-[28px] font-extrabold text-[#164364] lowercase font-['Syne',_sans-serif]">
                  TechStore
                </h2>
              </div>
              <div className="flex gap-[14px] items-center">
                <button className="w-6 h-6 text-[#164364] hover:text-blue-600 transition-colors">
                  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>
                <button className="w-6 h-6 text-[#164364] hover:text-blue-600 transition-colors">
                  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </button>
                <button className="w-6 h-6 text-[#164364] hover:text-blue-600 transition-colors">
                  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Company Links */}
            <div className="flex flex-col gap-[10px] w-[200px]">
              <h3 className="text-[15px] font-bold text-[#164364] font-['Space_Mono',_sans-serif]">Company</h3>
              <button className="text-[15px] font-bold text-[#164364] font-['Space_Mono',_sans-serif] text-left hover:text-blue-600 transition-colors">About Us</button>
              <button className="text-[15px] font-bold text-[#164364] font-['Space_Mono',_sans-serif] text-left hover:text-blue-600 transition-colors">Careers</button>
              <button className="text-[15px] font-bold text-[#164364] font-['Space_Mono',_sans-serif] text-left hover:text-blue-600 transition-colors">Press</button>
              <button className="text-[15px] font-bold text-[#164364] font-['Space_Mono',_sans-serif] text-left hover:text-blue-600 transition-colors">Investors</button>
            </div>

            {/* Support Links */}
            <div className="flex flex-col gap-[10px] w-[200px]">
              <h3 className="text-[15px] font-bold text-[#164364] font-['Space_Mono',_sans-serif]">Support</h3>
              <button className="text-[15px] font-bold text-[#164364] font-['Space_Mono',_sans-serif] text-left hover:text-blue-600 transition-colors">Contact Us</button>
              <button className="text-[15px] font-bold text-[#164364] font-['Space_Mono',_sans-serif] text-left hover:text-blue-600 transition-colors">Warranty</button>
              <button className="text-[15px] font-bold text-[#164364] font-['Space_Mono',_sans-serif] text-left hover:text-blue-600 transition-colors">FAQs</button>
              <button className="text-[15px] font-bold text-[#164364] font-['Space_Mono',_sans-serif] text-left hover:text-blue-600 transition-colors">Store Locator</button>
            </div>

            {/* Newsletter Section */}
            <div className="flex flex-col gap-[20px] w-full lg:w-[400px]">
              <div className="flex flex-col gap-[6px]">
                <h3 className="text-[15px] font-semibold text-[#164364] font-['Familjen_Grotesk',_sans-serif]">
                  Subscribe to our newsletter
                </h3>
                <p className="text-[15px] font-normal text-[#164364] font-['Familjen_Grotesk',_sans-serif]">
                  Stay updated with the latest tech news and offers.
                </p>
              </div>
              <div className="flex gap-[14px] items-start">
                <div className="flex-1 bg-[#fafdff] border border-[#495f6e] rounded-[22px] px-[14px] py-[10px]">
                  <input 
                    type="email" 
                    placeholder="Email address"
                    className="w-full bg-transparent text-[15px] text-[#164364] placeholder-[#164364] outline-none font-['Familjen_Grotesk',_sans-serif]"
                  />
                </div>
                <button className="bg-transparent border border-[#0a578f] rounded-[22px] px-[20px] py-[10px] hover:bg-[#0a578f] hover:text-white transition-colors">
                  <span className="text-[15px] font-bold text-[#164364] font-['Space_Mono',_sans-serif] hover:text-white">
                    Subscribe
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
