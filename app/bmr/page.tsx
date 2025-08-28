'use client'

import Image from "next/image"
import Link from "next/link"

import bmr from './../images/bmr.png'

export default function Page() {
    return (
        <body className="bg-slate-100 flex items-center justify-center min-h-screen p-4">

            {/* <!-- Main container --> */}
            <div className="w-full max-w-sm mx-auto flex flex-col items-center">

                {/* <!-- Calculator Card --> */}
                <div className="bg-white p-8 rounded-3xl shadow-2xl w-full mb-8">

                    {/* <!-- Card Header --> */}
                    <div className="flex flex-col items-center text-center mb-6">
                        <Link href="/">
                            <Image src={bmr} alt="BMR" width={100} height={100} className="mb-4" />
                        </Link>
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-2">BMR Calculator</h1>
                        <p className="text-lg text-slate-500 font-medium">คำนวณอัตราการเผาผลาญพลังงานขั้นพื้นฐาน</p>
                    </div>

                    {/* <!-- Input and Display Section --> */}
                    <div className="space-y-6">
                        <div>
                            <label className="block text-slate-700 font-semibold mb-2">น้ำหนัก (กิโลกรัม):</label>
                            <input type="number" id="bmrWeight" placeholder="0" className="w-full px-4 py-3 rounded-xl bg-slate-100 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200" />
                        </div>

                        <div>
                            <label className="block text-slate-700 font-semibold mb-2">ส่วนสูง (เซนติเมตร):</label>
                            <input type="number" id="bmrHeight" placeholder="0" className="w-full px-4 py-3 rounded-xl bg-slate-100 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200" />
                        </div>

                        <div>
                            <label className="block text-slate-700 font-semibold mb-2">อายุ (ปี):</label>
                            <input type="number" id="bmrAge" placeholder="0" className="w-full px-4 py-3 rounded-xl bg-slate-100 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200" />
                        </div>

                        {/* <!-- Gender Radio Buttons --> */}
                        <div>
                            <span className="block text-slate-700 font-semibold mb-2">เพศ:</span>
                            <div className="flex flex-col space-x-4">
                                <label className="inline-flex items-center">
                                    <input type="radio" name="gender" value="male" autoFocus className="form-radio text-indigo-600 focus:ring-indigo-500" />
                                    <span className="ml-2 text-slate-700">ชาย</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input type="radio" name="gender" value="female" className="form-radio text-indigo-600 focus:ring-indigo-500" />
                                    <span className="ml-2 text-slate-700">หญิง</span>
                                </label>
                            </div>
                        </div>

                        {/* <!-- Action Buttons --> */}
                        <div className="flex flex-col space-y-3">
                            <button className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-xl shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-200">
                                คำนวณ BMR
                            </button>
                            <button className="w-full bg-slate-200 text-slate-700 font-bold py-3 px-4 rounded-xl shadow-md hover:bg-slate-300 focus:outline-none focus:ring-4 focus:ring-slate-300 transition-all duration-200">
                                ล้างข้อมูล
                            </button>
                        </div>

                        {/* <!-- Result Display --> */}
                        <div className="bg-indigo-50 p-4 rounded-xl text-center">
                            <p className="text-[19px] font-bold">ค่า BMR ที่คำนวณได้: <span id="bmrResult" className="text-red-700">0.00</span></p>
                        </div>
                    </div>
                </div>

                {/* <!-- Footer Text --> */}
                <p className="text-sm text-slate-400 font-medium">Dev by Tarasato, Xato Empire</p>
            </div>

        </body>
    )
}
