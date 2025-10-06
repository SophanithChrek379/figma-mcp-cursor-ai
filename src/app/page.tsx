"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Banner component based on Figma design
function PromoBanner({ onClose }: { readonly onClose: () => void }) {
  const imgCloseButton = "/assets/icons/icon-close-button-primary.svg";

  return (
    <div
      className="box-border content-stretch flex gap-[6px] items-center px-4 py-[10px] relative size-full sticky top-0 z-50"
      data-name="Promo Banner"
      data-node-id="129:548"
    >
      <div
        className="absolute bg-[#0d99ff] bottom-0 left-[-52px] right-[-52px] top-0"
        data-name="Background"
        data-node-id="129:549"
      />
      <p
        className="font-['Familjen_Grotesk:SemiBold',_sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#000305] text-[13px] text-nowrap whitespace-pre"
        data-node-id="129:550"
      >
        Summer Sale - Up to 50% off!
      </p>
      <p
        className="basis-0 font-['Familjen_Grotesk:Regular',_sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#000305] text-[13px]"
        data-node-id="129:551"
      >
        Use code SAVE10
      </p>
      <Button
        variant="ghost"
        size="sm"
        className="relative shrink-0 size-[24px] p-0 hover:bg-transparent"
        data-name="Close Button"
        data-node-id="129:552"
        onClick={onClose}
      >
        <Image
          alt="Close button"
          className="block max-w-none size-full"
          src={imgCloseButton}
          width={24}
          height={24}
        />
      </Button>
    </div>
  );
}

export default function Home() {
  // State management
  const [showBanner, setShowBanner] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Comprehensive local data for products
  const allProducts = [
    {
      id: 1,
      name: "Gaming Laptop",
      price: 1299,
      category: "Laptops",
      brand: "Gaming Pro",
      image:
        "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      colors: [
        "f4c56dcd721615763682c9c10c669fbf6a5204a7",
        "d40e5ac488ce7b2404fc4e3269b2b093351e3ee1",
      ],
      description: "High-performance gaming laptop with RTX graphics",
    },
    {
      id: 2,
      name: "Ultrabook",
      price: 999,
      category: "Laptops",
      brand: "SleekTech",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      colors: [
        "d9b4b9dbaa439b34da162e6d3601904013c7ff6c",
        "7181ab2d81d3285e244abee8fdf87343f224c45f",
      ],
      description: "Sleek and lightweight ultrabook for professionals",
    },
    {
      id: 3,
      name: "Desktop PC",
      price: 799,
      category: "Desktops",
      brand: "PowerBuild",
      image:
        "https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      colors: [
        "16c2cd8e6fc25741f761992341e4cc081579d24f",
        "04fb35a29438ad73187923cfa6e535bbf4b160ef",
      ],
      description: "Powerful desktop computer for work and gaming",
    },
    {
      id: 4,
      name: "Tablet",
      price: 499,
      category: "Tablets",
      brand: "TabMax",
      image:
        "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      colors: [
        "7f4c05d798c4e4f433234678fc74b6a657ba5b07",
        "9c12aebf1caad966df25fe051241ae04ae331592",
      ],
      description: "Versatile tablet for entertainment and productivity",
    },
    {
      id: 5,
      name: "Smartphone",
      price: 699,
      category: "Phones",
      brand: "PhoneX",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      colors: [
        "e2fac87601f7180ac425cab0246630725d75f5b6",
        "a1c6760c8fc9b6cab60675ae7c66604027695ecb",
      ],
      description: "Latest smartphone with advanced camera system",
    },
    {
      id: 6,
      name: "Smartwatch",
      price: 199,
      category: "Wearables",
      brand: "WatchPro",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      colors: [
        "f4c56dcd721615763682c9c10c669fbf6a5204a7",
        "c099d527307317b376afde556b152a92cfe2eb4b",
      ],
      description: "Smart fitness tracker with health monitoring",
    },
    {
      id: 7,
      name: "Gaming Mouse",
      price: 89,
      category: "Accessories",
      brand: "Gaming Pro",
      image: "/assets/images/products/product-computer-mouse.png",
      colors: [
        "f4c56dcd721615763682c9c10c669fbf6a5204a7",
        "d40e5ac488ce7b2404fc4e3269b2b093351e3ee1",
      ],
      description: "High-precision gaming mouse with RGB lighting",
    },
    {
      id: 8,
      name: "Mechanical Keyboard",
      price: 149,
      category: "Accessories",
      brand: "SleekTech",
      image:
        "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      colors: [
        "d9b4b9dbaa439b34da162e6d3601904013c7ff6c",
        "7181ab2d81d3285e244abee8fdf87343f224c45f",
      ],
      description: "Premium mechanical keyboard with tactile switches",
    },
    {
      id: 9,
      name: "Monitor",
      price: 299,
      category: "Accessories",
      brand: "PowerBuild",
      image:
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      colors: [
        "16c2cd8e6fc25741f761992341e4cc081579d24f",
        "04fb35a29438ad73187923cfa6e535bbf4b160ef",
      ],
      description: "4K monitor with HDR support for professional work",
    },
    {
      id: 10,
      name: "Wireless Headphones",
      price: 199,
      category: "Accessories",
      brand: "TabMax",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      colors: [
        "7f4c05d798c4e4f433234678fc74b6a657ba5b07",
        "9c12aebf1caad966df25fe051241ae04ae331592",
      ],
      description: "Noise-cancelling wireless headphones with premium sound",
    },
    {
      id: 11,
      name: "Gaming Chair",
      price: 399,
      category: "Accessories",
      brand: "PhoneX",
      image:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      colors: [
        "e2fac87601f7180ac425cab0246630725d75f5b6",
        "a1c6760c8fc9b6cab60675ae7c66604027695ecb",
      ],
      description: "Ergonomic gaming chair with lumbar support",
    },
    {
      id: 12,
      name: "Webcam",
      price: 79,
      category: "Accessories",
      brand: "WatchPro",
      image:
        "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      colors: [
        "f4c56dcd721615763682c9c10c669fbf6a5204a7",
        "c099d527307317b376afde556b152a92cfe2eb4b",
      ],
      description: "HD webcam for video conferencing and streaming",
    },
  ];

  const categories = [
    "All",
    "Laptops",
    "Desktops",
    "Tablets",
    "Phones",
    "Wearables",
    "Accessories",
  ];
  const brands = [
    "All",
    "Gaming Pro",
    "SleekTech",
    "PowerBuild",
    "TabMax",
    "PhoneX",
    "WatchPro",
  ];
  const priceRanges = [
    "All",
    "Under $500",
    "$500-$1000",
    "$1000-$1500",
    "Over $1500",
  ];

  // Dynamic filtering logic
  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch =
      searchQuery === "" ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "" ||
      selectedCategory === "All" ||
      product.category === selectedCategory;

    const matchesBrand =
      selectedBrand === "" ||
      selectedBrand === "All" ||
      product.brand === selectedBrand;

    const matchesPrice =
      selectedPrice === "" ||
      selectedPrice === "All" ||
      (selectedPrice === "Under $500" && product.price < 500) ||
      (selectedPrice === "$500-$1000" &&
        product.price >= 500 &&
        product.price <= 1000) ||
      (selectedPrice === "$1000-$1500" &&
        product.price > 1000 &&
        product.price <= 1500) ||
      (selectedPrice === "Over $1500" && product.price > 1500);

    return matchesSearch && matchesCategory && matchesBrand && matchesPrice;
  });

  // Pagination logic
  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  // Reset pagination when filters change
  const handleFilterChange = (filterType: string, value: string) => {
    setCurrentPage(1); // Reset to first page when filters change
    if (filterType === "category") setSelectedCategory(value);
    if (filterType === "price") setSelectedPrice(value);
    if (filterType === "brand") setSelectedBrand(value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br overflow-hidden from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Promo Banner */}
      {showBanner && <PromoBanner onClose={() => setShowBanner(false)} />}

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
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="md:hidden w-8 h-8 text-[#164364] hover:text-blue-600 transition-colors p-0"
                >
                  <svg
                    className="w-full h-full"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-white">
                <div className="flex flex-col space-y-4 mt-8">
                  <Button
                    variant="ghost"
                    className="justify-start text-[#164364] font-['Space_Mono',_sans-serif]"
                  >
                    Home
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="justify-start text-[#164364] font-['Space_Mono',_sans-serif]"
                      >
                        Products
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {categories.slice(1).map((category) => (
                        <DropdownMenuItem
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                        >
                          {category}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Button
                    variant="ghost"
                    className="justify-start text-[#164364] font-['Space_Mono',_sans-serif]"
                  >
                    Deals
                  </Button>
                  <Button
                    variant="ghost"
                    className="justify-start text-[#164364] font-['Space_Mono',_sans-serif]"
                  >
                    Support
                  </Button>
                  <Button
                    variant="ghost"
                    className="justify-start text-[#164364] font-['Space_Mono',_sans-serif]"
                  >
                    Contact
                  </Button>
                </div>
              </SheetContent>
            </Sheet>

            {/* Navigation Links - Desktop Only */}
            <nav className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center space-x-6 lg:space-x-10">
              <Button
                variant="ghost"
                className="flex items-center space-x-1.5 group text-[#164364] hover:text-blue-600"
              >
                <span className="text-sm lg:text-[15px] font-bold font-['Space_Mono',_sans-serif]">
                  Home
                </span>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center space-x-1.5 group text-[#164364] hover:text-blue-600"
                  >
                    <span className="text-sm lg:text-[15px] font-bold font-['Space_Mono',_sans-serif]">
                      Products
                    </span>
                    <svg
                      className="w-3 h-3 lg:w-4 lg:h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {categories.slice(1).map((category) => (
                    <DropdownMenuItem
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Button
                variant="ghost"
                className="flex items-center space-x-1.5 group text-[#164364] hover:text-blue-600"
              >
                <span className="text-sm lg:text-[15px] font-bold font-['Space_Mono',_sans-serif]">
                  Deals
                </span>
              </Button>
              <Button
                variant="ghost"
                className="flex items-center space-x-1.5 group text-[#164364] hover:text-blue-600"
              >
                <span className="text-sm lg:text-[15px] font-bold font-['Space_Mono',_sans-serif]">
                  Support
                </span>
              </Button>
              <Button
                variant="ghost"
                className="flex items-center space-x-1.5 group text-[#164364] hover:text-blue-600"
              >
                <span className="text-sm lg:text-[15px] font-bold font-['Space_Mono',_sans-serif]">
                  Contact
                </span>
              </Button>
            </nav>

            {/* Action Icons - Responsive */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-5 h-5 lg:w-6 lg:h-6 text-[#164364] hover:text-blue-600 transition-colors p-0"
                  >
                    <svg
                      className="w-full h-full"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <div className="space-y-4">
                    <h2 className="text-lg font-semibold text-[#164364]">
                      Search Products
                    </h2>
                    <Input
                      placeholder="Search for products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full"
                    />
                    <Button
                      onClick={() => {
                        // Search is already handled by the filteredProducts logic
                        console.log("Searching for:", searchQuery);
                      }}
                      className="w-full"
                    >
                      Search
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
              <Button
                variant="ghost"
                size="sm"
                className="w-5 h-5 lg:w-6 lg:h-6 text-[#164364] hover:text-blue-600 transition-colors p-0"
              >
                <svg
                  className="w-full h-full"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-5 h-5 lg:w-6 lg:h-6 text-[#164364] hover:text-blue-600 transition-colors p-0"
              >
                <svg
                  className="w-full h-full"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
                  />
                </svg>
              </Button>
            </div>

            {/* Mobile Action Icons - Only Cart */}
            <div className="md:hidden flex items-center">
              <Button
                variant="ghost"
                size="sm"
                className="w-6 h-6 text-[#164364] hover:text-blue-600 transition-colors p-0"
              >
                <svg
                  className="w-full h-full"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
                  />
                </svg>
              </Button>
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
                <h3 className="font-semibold font-['Familjen_Grotesk',_sans-serif] truncate">
                  Gaming Laptop
                </h3>
                <p className="font-normal font-['Familjen_Grotesk',_sans-serif]">
                  $1,299
                </p>
              </div>
              <div className="flex gap-[14px] items-center h-[32px]">
                <div className="h-[24px] relative shrink-0 w-[32px]">
                  <div className="absolute bottom-[-12.5%] left-0 right-0 top-[-12.5%]">
                    <Image
                      alt="Color Swatch"
                      className="block max-w-none size-full"
                      src="/assets/icons/icon-color-swatch-gaming-laptop-1.svg"
                      width={32}
                      height={24}
                    />
                  </div>
                </div>
                <div className="h-[24px] relative shrink-0 w-[32px]">
                  <Image
                    alt="Color Swatch"
                    className="block max-w-none size-full"
                    src="/assets/icons/icon-color-swatch-gaming-laptop-2.svg"
                    width={32}
                    height={24}
                  />
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
                <h3 className="font-semibold font-['Familjen_Grotesk',_sans-serif] truncate">
                  Ultrabook
                </h3>
                <p className="font-normal font-['Familjen_Grotesk',_sans-serif]">
                  $999
                </p>
              </div>
              <div className="flex gap-[14px] items-center h-[32px]">
                <div className="h-[24px] relative shrink-0 w-[32px]">
                  <div className="absolute bottom-[-12.5%] left-0 right-0 top-[-12.5%]">
                    <Image
                      alt="Color Swatch"
                      className="block max-w-none size-full"
                      src="/assets/icons/icon-color-swatch-ultrabook-1.svg"
                      width={32}
                      height={24}
                    />
                  </div>
                </div>
                <div className="h-[24px] relative shrink-0 w-[32px]">
                  <Image
                    alt="Color Swatch"
                    className="block max-w-none size-full"
                    src="/assets/icons/icon-color-swatch-ultrabook-2.svg"
                    width={32}
                    height={24}
                  />
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
                <h3 className="font-semibold font-['Familjen_Grotesk',_sans-serif] truncate">
                  Desktop PC
                </h3>
                <p className="font-normal font-['Familjen_Grotesk',_sans-serif]">
                  $799
                </p>
              </div>
              <div className="flex gap-[14px] items-center h-[32px]">
                <div className="h-[24px] relative shrink-0 w-[32px]">
                  <div className="absolute bottom-[-12.5%] left-0 right-0 top-[-12.5%]">
                    <Image
                      alt="Color Swatch"
                      className="block max-w-none size-full"
                      src="/assets/icons/icon-color-swatch-desktop-pc-1.svg"
                      width={32}
                      height={24}
                    />
                  </div>
                </div>
                <div className="h-[24px] relative shrink-0 w-[32px]">
                  <Image
                    alt="Color Swatch"
                    className="block max-w-none size-full"
                    src="/assets/icons/icon-color-swatch-desktop-pc-2.svg"
                    width={32}
                    height={24}
                  />
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
                <h3 className="font-semibold font-['Familjen_Grotesk',_sans-serif] truncate">
                  Tablet
                </h3>
                <p className="font-normal font-['Familjen_Grotesk',_sans-serif]">
                  $499
                </p>
              </div>
              <div className="flex gap-[14px] items-center h-[32px]">
                <div className="h-[24px] relative shrink-0 w-[32px]">
                  <div className="absolute bottom-[-12.5%] left-0 right-0 top-[-12.5%]">
                    <Image
                      alt="Color Swatch"
                      className="block max-w-none size-full"
                      src="/assets/icons/icon-color-swatch-tablet-1.svg"
                      width={32}
                      height={24}
                    />
                  </div>
                </div>
                <div className="h-[24px] relative shrink-0 w-[32px]">
                  <Image
                    alt="Color Swatch"
                    className="block max-w-none size-full"
                    src="/assets/icons/icon-color-swatch-tablet-2.svg"
                    width={32}
                    height={24}
                  />
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
                <h3 className="font-semibold font-['Familjen_Grotesk',_sans-serif] truncate">
                  Smartphone
                </h3>
                <p className="font-normal font-['Familjen_Grotesk',_sans-serif]">
                  $699
                </p>
              </div>
              <div className="flex gap-[14px] items-center h-[32px]">
                <div className="h-[24px] relative shrink-0 w-[32px]">
                  <div className="absolute bottom-[-12.5%] left-0 right-0 top-[-12.5%]">
                    <Image
                      alt="Color Swatch"
                      className="block max-w-none size-full"
                      src="/assets/icons/icon-color-swatch-smartphone-1.svg"
                      width={32}
                      height={24}
                    />
                  </div>
                </div>
                <div className="h-[24px] relative shrink-0 w-[32px]">
                  <Image
                    alt="Color Swatch"
                    className="block max-w-none size-full"
                    src="/assets/icons/icon-color-swatch-smartphone-2.svg"
                    width={32}
                    height={24}
                  />
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
                <h3 className="font-semibold font-['Familjen_Grotesk',_sans-serif] truncate">
                  Smartwatch
                </h3>
                <p className="font-normal font-['Familjen_Grotesk',_sans-serif]">
                  $199
                </p>
              </div>
              <div className="flex gap-[14px] items-center h-[32px]">
                <div className="h-[24px] relative shrink-0 w-[32px]">
                  <div className="absolute bottom-[-12.5%] left-0 right-0 top-[-12.5%]">
                    <Image
                      alt="Color Swatch"
                      className="block max-w-none size-full"
                      src="/assets/icons/icon-color-swatch-smartwatch-1.svg"
                      width={32}
                      height={24}
                    />
                  </div>
                </div>
                <div className="h-[24px] relative shrink-0 w-[32px]">
                  <Image
                    alt="Color Swatch"
                    className="block max-w-none size-full"
                    src="/assets/icons/icon-color-swatch-smartwatch-2.svg"
                    width={32}
                    height={24}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrow Button */}
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <button className="bg-white dark:bg-slate-800 p-[10px] rounded-[22px] transition-shadow">
              <svg
                className="w-5 h-5 text-[#164364]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
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
                <Select
                  value={selectedCategory}
                  onValueChange={(value) =>
                    handleFilterChange("category", value)
                  }
                >
                  <SelectTrigger className="bg-white dark:bg-slate-800 border border-[#085791] rounded-[22px] px-[20px] py-[10px] w-[140px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select
                  value={selectedPrice}
                  onValueChange={(value) => handleFilterChange("price", value)}
                >
                  <SelectTrigger className="bg-white dark:bg-slate-800 border border-[#085791] rounded-[22px] px-[20px] py-[10px] w-[120px]">
                    <SelectValue placeholder="Price" />
                  </SelectTrigger>
                  <SelectContent>
                    {priceRanges.map((price) => (
                      <SelectItem key={price} value={price}>
                        {price}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select
                  value={selectedBrand}
                  onValueChange={(value) => handleFilterChange("brand", value)}
                >
                  <SelectTrigger className="bg-white dark:bg-slate-800 border border-[#085791] rounded-[22px] px-[20px] py-[10px] w-[120px]">
                    <SelectValue placeholder="Brand" />
                  </SelectTrigger>
                  <SelectContent>
                    {brands.map((brand) => (
                      <SelectItem key={brand} value={brand}>
                        {brand}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-[15px] font-normal text-[#164364] font-['Familjen_Grotesk',_sans-serif] text-right">
                  {filteredProducts.length}+
                </p>
                {(selectedCategory || selectedPrice || selectedBrand) && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSelectedCategory("");
                      setSelectedPrice("");
                      setSelectedBrand("");
                    }}
                    className="text-xs"
                  >
                    Clear
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex flex-col gap-[52px] items-start relative w-full">
            {paginatedProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] w-full">
                {paginatedProducts.map((product) => (
                  <div key={product.id} className="flex flex-col gap-[14px]">
                    <div className="h-[432px] w-full relative rounded-[22px] overflow-hidden">
                      <Image
                        alt={product.name}
                        src={product.image}
                        fill
                        className="object-cover rounded-[22px]"
                      />
                      <div className="absolute inset-0 border border-[#495f6e] rounded-[22px] pointer-events-none"></div>
                    </div>
                    <div className="flex flex-col text-[#164364] text-[15px] leading-[20px]">
                      <h3 className="font-semibold font-['Familjen_Grotesk',_sans-serif] truncate">
                        {product.name}
                      </h3>
                      <p className="font-normal font-['Familjen_Grotesk',_sans-serif]">
                        ${product.price}
                      </p>
                      <p className="font-normal font-['Familjen_Grotesk',_sans-serif] text-xs text-gray-500 mt-1">
                        {product.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center w-full py-12">
                <p className="text-[#164364] text-lg font-['Familjen_Grotesk',_sans-serif]">
                  No products found matching your criteria.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedCategory("");
                    setSelectedPrice("");
                    setSelectedBrand("");
                    setSearchQuery("");
                  }}
                  className="mt-4"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>

          {/* Pagination */}
          <div className="flex items-start justify-end pt-[68px] w-full">
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                    className={`rounded-[22px] p-[10px] w-[40px] h-[40px] ${
                      currentPage === page
                        ? "bg-[#0d99ff] text-[#000305]"
                        : "hover:bg-gray-100 dark:hover:bg-slate-700"
                    }`}
                  >
                    <span className="text-[15px] font-bold font-['Space_Mono',_sans-serif]">
                      {page}
                    </span>
                  </Button>
                )
              )}
              <Button
                variant="ghost"
                size="sm"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage >= totalPages}
                className="bg-white dark:bg-slate-800 rounded-[22px] p-[10px] w-[40px] h-[40px] hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors disabled:opacity-50"
              >
                <svg
                  className="w-5 h-5 text-[#164364]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Button>
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
                  <Image
                    alt="Facebook"
                    className="w-full h-full"
                    src="/assets/icons/icon-facebook-primary.svg"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="w-6 h-6">
                  <Image
                    alt="Instagram"
                    className="w-full h-full"
                    src="/assets/icons/icon-instagram-primary.svg"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="w-6 h-6">
                  <Image
                    alt="Twitter"
                    className="w-full h-full"
                    src="/assets/icons/icon-twitter-primary.svg"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div className="flex flex-col gap-[10px] w-[200px]">
              <p className="text-[15px] font-bold text-[#164364] font-['Space_Mono',_sans-serif] leading-[20px]">
                Company
              </p>
              <p className="text-[15px] font-bold text-[#164364] font-['Space_Mono',_sans-serif] leading-[20px]">
                About Us
              </p>
              <p className="text-[15px] font-bold text-[#164364] font-['Space_Mono',_sans-serif] leading-[20px]">
                Careers
              </p>
              <p className="text-[15px] font-bold text-[#164364] font-['Space_Mono',_sans-serif] leading-[20px]">
                Press
              </p>
              <p className="text-[15px] font-bold text-[#164364] font-['Space_Mono',_sans-serif] leading-[20px]">
                Investors
              </p>
            </div>

            {/* Support Links */}
            <div className="flex flex-col gap-[10px] w-[200px]">
              <p className="text-[15px] font-bold text-[#164364] font-['Space_Mono',_sans-serif] leading-[20px]">
                Support
              </p>
              <p className="text-[15px] font-bold text-[#164364] font-['Space_Mono',_sans-serif] leading-[20px]">
                Contact Us
              </p>
              <p className="text-[15px] font-bold text-[#164364] font-['Space_Mono',_sans-serif] leading-[20px]">
                Warranty
              </p>
              <p className="text-[15px] font-bold text-[#164364] font-['Space_Mono',_sans-serif] leading-[20px]">
                FAQs
              </p>
              <p className="text-[15px] font-bold text-[#164364] font-['Space_Mono',_sans-serif] leading-[20px]">
                Store Locator
              </p>
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
                <Input
                  type="email"
                  placeholder="Email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 bg-[#fafdff] border border-[#495f6e] rounded-[22px] px-[14px] py-[10px] text-[15px] font-normal text-[#164364] font-['Familjen_Grotesk',_sans-serif] leading-[20px] placeholder:text-[#164364]"
                />
                <Button
                  onClick={() => {
                    if (newsletterEmail) {
                      console.log("Newsletter subscription:", newsletterEmail);
                      setNewsletterEmail("");
                    }
                  }}
                  className="border border-[#0a578f] rounded-[22px] px-[20px] py-[10px] bg-transparent hover:bg-[#0a578f] hover:text-white text-[#164364] font-['Space_Mono',_sans-serif]"
                >
                  <span className="text-[15px] font-bold leading-[20px]">
                    Subscribe
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
