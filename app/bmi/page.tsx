'use client'

import Image from "next/image"
import Link from "next/link"

import bmi from './../images/bmi.png'

export default function Page() {
  return (
    <div className="bg-slate-100 flex items-center justify-center min-h-screen p-4">

      {/* <!-- Main container --> */}
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center">

        {/* <!-- Calculator Card --> */}
        <div className="bg-white p-8 rounded-3xl shadow-2xl w-full mb-8">

          {/* <!-- Card Header --> */}
          <div className="flex flex-col items-center text-center mb-6">
            <Link href="/">
              <Image src={bmi} alt="BMI" width={100} height={100} className="mb-4" />
            </Link>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-2">BMI Calculator</h1>
            <p className="text-lg text-slate-500 font-medium">คำนวณดัชนีมวลกาย</p>
          </div>

          {/* <!-- Input and Display Section --> */}
          <div className="space-y-6">
            <div>
              <label className="block text-slate-700 font-semibold mb-2">ป้อนน้ำหนัก (กิโลกรัม)</label>
              <input type="number" id="weightInput" placeholder="0" className="w-full px-4 py-3 rounded-xl bg-slate-100 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200" />
            </div>

            <div>
              <label className="block text-slate-700 font-semibold mb-2">ป้อนส่วนสูง (เซนติเมตร)</label>
              <input type="number" id="heightInput" placeholder="0" className="w-full px-4 py-3 rounded-xl bg-slate-100 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200" />
            </div>

            {/* <!-- Action Buttons --> */}
            <div className="flex flex-col space-y-3">
              <button className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-xl shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-200">
                คำนวณ
              </button>
              <button className="w-full bg-slate-200 text-slate-700 font-bold py-3 px-4 rounded-xl shadow-md hover:bg-slate-300 focus:outline-none focus:ring-4 focus:ring-slate-300 transition-all duration-200">
                รีเซ็ต
              </button>
            </div>

            {/* <!-- Result Display --> */}
            <div className="bg-indigo-50 p-4 rounded-xl text-center">
              <p className=" text-[19px] font-bold">ค่า BMI ที่คำนวณได้: <span id="result" className="text-red-700">0.00</span></p>
            </div>

          </div>
        </div>

        {/* <!-- Footer Text --> */}
        <p className="text-sm text-slate-400 font-medium">Dev by Tarasato, Xato Empire</p>
      </div>

    </div>
  )
}
