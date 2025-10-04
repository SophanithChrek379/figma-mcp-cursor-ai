import Image from "next/image";

// Banner component based on Figma design
function PromoBanner() {
  const imgCloseButton = "http://localhost:3845/assets/a99194df1bf9a5f874bfe6d3c2dbdedbcb1235eb.svg";

  return (
    <div className="box-border content-stretch flex gap-[6px] items-center px-4 py-[10px] relative size-full sticky top-0 z-50" data-name="Promo Banner" data-node-id="129:548">
      <div className="absolute bg-[#0d99ff] bottom-0 left-[-52px] right-[-52px] top-0" data-name="Background" data-node-id="129:549" />
      <p className="font-['Familjen_Grotesk:SemiBold',_sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#000305] text-[13px] text-nowrap whitespace-pre" data-node-id="129:550">
        Summer Sale - Up to 50% off!
      </p>
      <p className="basis-0 font-['Familjen_Grotesk:Regular',_sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#000305] text-[13px]" data-node-id="129:551">
        Use code SAVE10
      </p>
      <div className="relative shrink-0 size-[24px]" data-name="Close Button" data-node-id="129:552">
        <Image alt="Close button" className="block max-w-none size-full" src={imgCloseButton} width={24} height={24} />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br overflow-hidden from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Promo Banner */}
      <PromoBanner />
      
      {/* Header */}
      <header className="border-b border-[#164364]">
        <div className="container mx-auto px-4 py-3 md:py-5">
          <div className="flex items-center justify-between relative">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-xl sm:text-2xl md:text-[28px] font-extrabold text-[#164364] lowercase font-['Syne',_sans-serif]">
                TechStore
              </h1>
            </div>

            {/* Mobile Hamburger Menu */}
            <button className="md:hidden w-8 h-8 text-[#164364] hover:text-blue-600 transition-colors">
              <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Navigation Links - Desktop Only */}
            <nav className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center space-x-6 lg:space-x-10">
              <button className="flex items-center space-x-1.5 group">
                <span className="text-sm lg:text-[15px] font-bold text-[#164364] font-['Space_Mono',_sans-serif]">Home</span>
                <svg className="w-3 h-3 lg:w-4 lg:h-4 text-[#164364]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <button className="flex items-center space-x-1.5 group">
                <span className="text-sm lg:text-[15px] font-bold text-[#164364] font-['Space_Mono',_sans-serif]">Products</span>
                <svg className="w-3 h-3 lg:w-4 lg:h-4 text-[#164364]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <button className="flex items-center space-x-1.5 group">
                <span className="text-sm lg:text-[15px] font-bold text-[#164364] font-['Space_Mono',_sans-serif]">Deals</span>
                <svg className="w-3 h-3 lg:w-4 lg:h-4 text-[#164364]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <button className="flex items-center space-x-1.5 group">
                <span className="text-sm lg:text-[15px] font-bold text-[#164364] font-['Space_Mono',_sans-serif]">Support</span>
                <svg className="w-3 h-3 lg:w-4 lg:h-4 text-[#164364]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <button className="flex items-center space-x-1.5 group">
                <span className="text-sm lg:text-[15px] font-bold text-[#164364] font-['Space_Mono',_sans-serif]">Contact</span>
                <svg className="w-3 h-3 lg:w-4 lg:h-4 text-[#164364]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </nav>

            {/* Action Icons - Responsive */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
              <button className="w-5 h-5 lg:w-6 lg:h-6 text-[#164364] hover:text-blue-600 transition-colors">
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="w-5 h-5 lg:w-6 lg:h-6 text-[#164364] hover:text-blue-600 transition-colors">
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
              <button className="w-5 h-5 lg:w-6 lg:h-6 text-[#164364] hover:text-blue-600 transition-colors">
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                </svg>
              </button>
            </div>

            {/* Mobile Action Icons - Only Cart */}
            <div className="md:hidden flex items-center">
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
        <section className="flex flex-col gap-8 md:gap-[52px] items-center py-12 md:py-[96px] mt-8">
          <h1 className="font-bold text-[#164364] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[120px] text-center tracking-[-0.5px] sm:tracking-[-1px] md:tracking-[-1.5px] lg:tracking-[-2px] xl:tracking-[-2.4px] w-full leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-[120px] font-['Plus_Jakarta_Sans',_sans-serif] px-4">
            Discover the Latest in Computing Technology
          </h1>
          <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[672px] w-full relative overflow-hidden rounded-[22px] border border-[#495f6e]">
            <Image 
              alt="Latest computing technology showcase with gaming setup" 
              src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80"
              fill
              className="object-cover rounded-[22px]"
              priority
            />
          </div>
        </section>

        {/* Product Carousel Section */}
        <section className="flex flex-col gap-[32px] py-[52px] mt-8 relative overflow-hidden">
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
                <div className="h-[24px] relative shrink-0 w-[32px]">
                  <div className="absolute bottom-[-12.5%] left-0 right-0 top-[-12.5%]">
                    <Image alt="Color Swatch" className="block max-w-none size-full" src="http://localhost:3845/assets/f4c56dcd721615763682c9c10c669fbf6a5204a7.svg" width={32} height={24} />
                  </div>
                </div>
                <div className="h-[24px] relative shrink-0 w-[32px]">
                  <Image alt="Color Swatch" className="block max-w-none size-full" src="http://localhost:3845/assets/d40e5ac488ce7b2404fc4e3269b2b093351e3ee1.svg" width={32} height={24} />
                </div>
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
                <div className="h-[24px] relative shrink-0 w-[32px]">
                  <div className="absolute bottom-[-12.5%] left-0 right-0 top-[-12.5%]">
                    <Image alt="Color Swatch" className="block max-w-none size-full" src="http://localhost:3845/assets/d9b4b9dbaa439b34da162e6d3601904013c7ff6c.svg" width={32} height={24} />
                  </div>
                </div>
                <div className="h-[24px] relative shrink-0 w-[32px]">
                  <Image alt="Color Swatch" className="block max-w-none size-full" src="http://localhost:3845/assets/7181ab2d81d3285e244abee8fdf87343f224c45f.svg" width={32} height={24} />
                </div>
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
                <div className="h-[24px] relative shrink-0 w-[32px]">
                  <div className="absolute bottom-[-12.5%] left-0 right-0 top-[-12.5%]">
                    <Image alt="Color Swatch" className="block max-w-none size-full" src="http://localhost:3845/assets/16c2cd8e6fc25741f761992341e4cc081579d24f.svg" width={32} height={24} />
                  </div>
                </div>
                <div className="h-[24px] relative shrink-0 w-[32px]">
                  <Image alt="Color Swatch" className="block max-w-none size-full" src="http://localhost:3845/assets/04fb35a29438ad73187923cfa6e535bbf4b160ef.svg" width={32} height={24} />
                </div>
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
                <div className="h-[24px] relative shrink-0 w-[32px]">
                  <div className="absolute bottom-[-12.5%] left-0 right-0 top-[-12.5%]">
                    <Image alt="Color Swatch" className="block max-w-none size-full" src="http://localhost:3845/assets/7f4c05d798c4e4f433234678fc74b6a657ba5b07.svg" width={32} height={24} />
                  </div>
                </div>
                <div className="h-[24px] relative shrink-0 w-[32px]">
                  <Image alt="Color Swatch" className="block max-w-none size-full" src="http://localhost:3845/assets/9c12aebf1caad966df25fe051241ae04ae331592.svg" width={32} height={24} />
                </div>
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
                <div className="h-[24px] relative shrink-0 w-[32px]">
                  <div className="absolute bottom-[-12.5%] left-0 right-0 top-[-12.5%]">
                    <Image alt="Color Swatch" className="block max-w-none size-full" src="http://localhost:3845/assets/e2fac87601f7180ac425cab0246630725d75f5b6.svg" width={32} height={24} />
                  </div>
                </div>
                <div className="h-[24px] relative shrink-0 w-[32px]">
                  <Image alt="Color Swatch" className="block max-w-none size-full" src="http://localhost:3845/assets/a1c6760c8fc9b6cab60675ae7c66604027695ecb.svg" width={32} height={24} />
                </div>
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
                <div className="h-[24px] relative shrink-0 w-[32px]">
                  <div className="absolute bottom-[-12.5%] left-0 right-0 top-[-12.5%]">
                    <Image alt="Color Swatch" className="block max-w-none size-full" src="http://localhost:3845/assets/f4c56dcd721615763682c9c10c669fbf6a5204a7.svg" width={32} height={24} />
                  </div>
                </div>
                <div className="h-[24px] relative shrink-0 w-[32px]">
                  <Image alt="Color Swatch" className="block max-w-none size-full" src="http://localhost:3845/assets/c099d527307317b376afde556b152a92cfe2eb4b.svg" width={32} height={24} />
                </div>
              </div>
          </div>
        </div>

          {/* Navigation Arrow Button */}
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <button className="bg-white dark:bg-slate-800 p-[10px] rounded-[22px] transition-shadow">
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
        <section className="flex flex-col pb-[52px] pt-0 relative">
          {/* Filters */}
          <div className="flex flex-col gap-[32px] items-start justify-center px-0 py-[32px]">
            <div className="flex items-center justify-between w-full">
              <div className="flex gap-[14px] items-start">
                <button className="bg-white dark:bg-slate-800 border border-[#085791] rounded-[22px] px-[20px] py-[10px] flex items-center gap-[10px]">
                  <span className="text-[15px] font-bold text-[#164364] font-['Space_Mono',_sans-serif]">Category</span>
                  <svg className="w-4 h-4 text-[#164364]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <button className="bg-white dark:bg-slate-800 border border-[#085791] rounded-[22px] px-[20px] py-[10px] flex items-center gap-[10px]">
                  <span className="text-[15px] font-bold text-[#164364] font-['Space_Mono',_sans-serif]">Price</span>
                  <svg className="w-4 h-4 text-[#164364]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <button className="bg-white dark:bg-slate-800 border border-[#085791] rounded-[22px] px-[20px] py-[10px] flex items-center gap-[10px]">
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
              <button className="bg-white dark:bg-slate-800 rounded-[22px] p-[10px] w-[40px] h-[40px] flex items-center justify-center hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors">
                <svg className="w-5 h-5 text-[#164364]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="mt-24 border-t border-[#164364]">
        <div className="container mx-auto p-4 py-[52px]">
          
          {/* Footer Content */}
          <div className="flex flex-col lg:flex-row gap-[52px] items-start">
            {/* Logo and Social Icons */}
            <div className="flex flex-col gap-[14px]">
              <div className="w-[380px] flex items-center h-[32px]">
                <h2 className="text-[28px] font-extrabold text-[#164364] lowercase font-['Syne',_sans-serif] leading-none">
                  TechStore
                </h2>
              </div>
              <div className="flex gap-[14px] items-start">
                <div className="w-6 h-6">
                  <img alt="Facebook" className="w-full h-full" src="http://localhost:3845/assets/3123e78f99a5aef6eb82bff18f5e3897c1f396d5.svg" />
                </div>
                <div className="w-6 h-6">
                  <img alt="Instagram" className="w-full h-full" src="http://localhost:3845/assets/436295d86bc50b05f015bca0f79678c9699f1386.svg" />
                </div>
                <div className="w-6 h-6">
                  <img alt="Twitter" className="w-full h-full" src="http://localhost:3845/assets/98e9dcb877aab8a549ee94449f5d3b4a1999b394.svg" />
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div className="flex flex-col gap-[10px] w-[200px]">
              <p className="text-[15px] font-bold text-[#164364] font-['Space_Mono',_sans-serif] leading-[20px]">Company</p>
              <p className="text-[15px] font-bold text-[#164364] font-['Space_Mono',_sans-serif] leading-[20px]">About Us</p>
              <p className="text-[15px] font-bold text-[#164364] font-['Space_Mono',_sans-serif] leading-[20px]">Careers</p>
              <p className="text-[15px] font-bold text-[#164364] font-['Space_Mono',_sans-serif] leading-[20px]">Press</p>
              <p className="text-[15px] font-bold text-[#164364] font-['Space_Mono',_sans-serif] leading-[20px]">Investors</p>
            </div>

            {/* Support Links */}
            <div className="flex flex-col gap-[10px] w-[200px]">
              <p className="text-[15px] font-bold text-[#164364] font-['Space_Mono',_sans-serif] leading-[20px]">Support</p>
              <p className="text-[15px] font-bold text-[#164364] font-['Space_Mono',_sans-serif] leading-[20px]">Contact Us</p>
              <p className="text-[15px] font-bold text-[#164364] font-['Space_Mono',_sans-serif] leading-[20px]">Warranty</p>
              <p className="text-[15px] font-bold text-[#164364] font-['Space_Mono',_sans-serif] leading-[20px]">FAQs</p>
              <p className="text-[15px] font-bold text-[#164364] font-['Space_Mono',_sans-serif] leading-[20px]">Store Locator</p>
            </div>

            {/* Newsletter Section */}
            <div className="flex flex-col gap-[20px] w-full lg:w-[400px]">
              <div className="flex flex-col gap-[6px]">
                <p className="text-[15px] font-semibold text-[#164364] font-['Familjen_Grotesk',_sans-serif] leading-[20px]">
                  Subscribe to our newsletter
                </p>
                <p className="text-[15px] font-normal text-[#164364] font-['Familjen_Grotesk',_sans-serif] leading-[20px]">
                  Stay updated with the latest tech news and offers.
                </p>
              </div>
              <div className="flex gap-[14px] items-start">
                <div className="flex-1 bg-[#fafdff] border border-[#495f6e] rounded-[22px] px-[14px] py-[10px]">
                  <p className="text-[15px] font-normal text-[#164364] font-['Familjen_Grotesk',_sans-serif] leading-[20px]">
                    Email address
                  </p>
                </div>
                <div className="border border-[#0a578f] rounded-[22px] px-[20px] py-[10px] flex items-center justify-center">
                  <p className="text-[15px] font-bold text-[#164364] font-['Space_Mono',_sans-serif] leading-[20px]">
                    Subscribe
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
