"use client";

import Link from "next/link"
import Image from "next/image"
import moneyshare from './../images/moneyshare.png'

export default function Page() {
    return (
        <div className="bg-slate-100 flex items-center justify-center min-h-screen p-4">

            {/* <!-- คอนเทนเนอร์หลัก --> */}
            <div className="w-full max-w-3xl mx-auto flex flex-col items-center">

                {/* <!-- Card สำหรับเครื่องคำนวณ --> */}
                <div className="bg-white p-8 rounded-3xl shadow-2xl w-full mb-8">

                    {/* <!-- ส่วนหัวของ Card --> */}
                    <div className="flex flex-col items-center text-center mb-6">
                        {/* <!-- รูปภาพ (สามารถเปลี่ยนเป็น SVG หรือ icon ที่ต้องการได้) --> */}
                        <Link href="/">
                            <Image src={moneyshare} alt="Money Share" width={100} height={100} className="mb-4" />
                        </Link>
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-2">Money Share Calculator</h1>
                        <p className="text-lg text-slate-500 font-medium">คำนวณเงินที่ต้องการหารกัน</p>
                    </div>

                    {/* <!-- ช่องป้อนข้อมูลและส่วนแสดงผล --> */}
                    <div className="space-y-6">
                        <div>
                            <label className="block text-slate-700 font-semibold mb-2">ป้อนจำนวนเงิน</label>
                            <input type="number" id="totalAmount" placeholder="0.00" className="w-full px-4 py-3 rounded-xl bg-slate-100 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200" />
                        </div>

                        <div>
                            <label className="block text-slate-700 font-semibold mb-2">ป้อนจำนวนคน</label>
                            <input type="number" id="numberOfPeople" placeholder="0" className="w-full px-4 py-3 rounded-xl bg-slate-100 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200" />
                        </div>

                        {/* <!-- ส่วนแสดงผลลัพธ์ --> */}
                        <div className="bg-indigo-50 p-4 rounded-xl text-center">
                            <p className="text-green-700 text-2xl font-bold">หารกันคนละ 0.00 บาท</p>
                        </div>

                        {/* <!-- ปุ่มการทำงาน --> */}
                        <div className="flex flex-col space-y-3">
                            <button className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-xl shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-200">
                                คำนวณ
                            </button>
                            <button className="w-full bg-slate-200 text-slate-700 font-bold py-3 px-4 rounded-xl shadow-md hover:bg-slate-300 focus:outline-none focus:ring-4 focus:ring-slate-300 transition-all duration-200">
                                ล้างข้อมูล
                            </button>
                            <Link href="/" className="text-center">กลับสู่หน้าหลัก</Link>
                        </div>
                    </div>
                </div>

                {/* <!-- ข้อความด้านล่าง Card --> */}
                <p className="text-sm text-slate-400 font-medium">Dev by Tarasato, Xato Empire</p>

            </div>

        </div>
    )
}
