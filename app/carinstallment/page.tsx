'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import car from './../images/car.png'

export default function Page() {
    const [carOwner, setCarOwner] = useState("");
    const [carPrice, setCarPrice] = useState(0);
    const [interestRate, setInterestRate] = useState(0);
    const [downPayment, setDownPayment] = useState(15);
    const [loanTerm, setLoanTerm] = useState(12);
    const [monthlyPayment, setMonthlyPayment] = useState(0);

    const handleCalClick = () => {
        // Validate inputs
        if (carOwner === "") {
            alert("กรุณาป้อนชื่อผู้คำนวณ");
            return;
        }
        if (carPrice <= 0) {
            alert("กรุณาป้อนราคารถยนต์ให้มากกว่า 0");
            return;
        }
        if (downPayment < 0) {
            alert("กรุณาป้อนเงินดาวน์ให้มากกว่า 0");
            return;
        }
        if (loanTerm <= 0) {
            alert("กรุณาป้อนระยะเวลากู้เงินให้มากกว่า 0");
            return;
        }

        // Calculate monthly payment
        const FinanceTotal = carPrice - downPayment;
        const allInterest = (FinanceTotal * interestRate / 100) * monthlyPayment / 12;
        const monthly = FinanceTotal * allInterest / monthlyPayment;

        setMonthlyPayment(monthly);
    };

    const handleReset = () => {
        setCarOwner("");
        setCarPrice(0);
        setInterestRate(0);
        setDownPayment(0);
        setLoanTerm(0);
        setMonthlyPayment(0);
    };

    return (
        <body className="bg-slate-100 flex items-center justify-center min-h-screen p-4">

            {/* <!-- Main container --> */}
            <div className="w-full max-w-3xl mx-auto flex flex-col items-center">

                {/* <!-- Calculator Card --> */}
                <div className="bg-white p-8 rounded-3xl shadow-2xl w-full mb-8">

                    {/* <!-- Card Header --> */}
                    <div className="flex flex-col items-center text-center mb-6">
                        <Link href="/">
                            <Image src={car} alt="Car" width={100} height={100} className="mb-4" />
                        </Link>
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-2">Car Installment Calculator</h1>
                        <p className="text-lg text-slate-500 font-medium">คำนวณค่างวดรถยนต์</p>
                    </div>

                    {/* <!-- Input and Display Section --> */}
                    <div className="space-y-6">
                        <div>
                            <label className="block text-slate-700 font-semibold mb-2">ชื่อผู้คำนวณ</label>
                            <input type="string" id="carOwner" placeholder="ชื่อ-นามสกุล" value={carOwner} onChange={(e) => setCarOwner(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-slate-100 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200" />
                        </div>

                        <div>
                            <label className="block text-slate-700 font-semibold mb-2">ราคารถยนต์ (บาท)</label>
                            <input type="number" id="carPrice" placeholder="0.00" value={carPrice} onChange={(e) => setCarPrice(Number(e.target.value))} className="w-full px-4 py-3 rounded-xl bg-slate-100 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200" />
                        </div>

                        <div>
                            <label className="block text-slate-700 font-semibold mb-2">อัตราดอกเบี้ยต่อปี (%)</label>
                            <input type="number" id="interestRate" placeholder="0.00" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} className="w-full px-4 py-3 rounded-xl bg-slate-100 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200" />
                        </div>

                        {/* <!-- Down Payment Radio Buttons --> */}
                        <div>
                            <span className="block text-slate-700 font-semibold mb-2">เงินดาวน์</span>
                            <div className="flex flex-wrap gap-2">
                                <label className="inline-flex items-center">
                                    <input type="radio" name="downPayment" defaultChecked onChange={(e) => setDownPayment(Number(e.target.value))} value="5" className="form-radio text-indigo-600 focus:ring-indigo-500" />
                                    <span className="ml-2 text-slate-700">15%</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input type="radio" name="downPayment" onChange={(e) => setDownPayment(Number(e.target.value))} value="10" className="form-radio text-indigo-600 focus:ring-indigo-500" />
                                    <span className="ml-2 text-slate-700">20%</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input type="radio" name="downPayment" onChange={(e) => setDownPayment(Number(e.target.value))} value="15" className="form-radio text-indigo-600 focus:ring-indigo-500" />
                                    <span className="ml-2 text-slate-700">25%</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input type="radio" name="downPayment" onChange={(e) => setDownPayment(Number(e.target.value))} value="20" className="form-radio text-indigo-600 focus:ring-indigo-500" />
                                    <span className="ml-2 text-slate-700">30%</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input type="radio" name="downPayment" onChange={(e) => setDownPayment(Number(e.target.value))} value="25" className="form-radio text-indigo-600 focus:ring-indigo-500" />
                                    <span className="ml-2 text-slate-700">35%</span>
                                </label>
                            </div>
                        </div>

                        {/* <!-- Installment Months Dropdown --> */}
                        <div>
                            <label className="block text-slate-700 font-semibold mb-2">จำนวนเดือนที่ผ่อน</label>
                            <div className="relative">
                                <select id="installmentMonths" value={loanTerm} onChange={(e) => setLoanTerm(Number(e.target.value))} className="w-full px-4 py-3 rounded-xl bg-slate-100 text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 appearance-none">
                                    <option value="24">24 เดือน</option>
                                    <option value="36">36 เดือน</option>
                                    <option value="48">48 เดือน</option>
                                    <option value="60">60 เดือน</option>
                                    <option value="72">72 เดือน</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-700">
                                    <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Action Buttons --> */}
                        <div className="flex flex-col space-y-3">
                            <button onClick={handleCalClick} className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-xl shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-200">
                                คำนวณ
                            </button>
                            <button onClick={handleReset} className="w-full bg-slate-200 text-slate-700 font-bold py-3 px-4 rounded-xl shadow-md hover:bg-slate-300 focus:outline-none focus:ring-4 focus:ring-slate-300 transition-all duration-200">
                                ล้างข้อมูล
                            </button>
                            <Link href="/" className="text-center">กลับสู่หน้าหลัก</Link>
                        </div>

                        {/* <!-- Result Display --> */}
                        <div className="bg-indigo-50 p-4 rounded-xl text-center">
                            <p className="font-bold text-[19px]">ยอดผ่อนชำระต่อเดือน <span id="installmentAmount" className="text-red-700">{monthlyPayment.toFixed(2)}</span> บาท</p>
                        </div>

                    </div>
                </div>

                {/* <!-- Footer Text --> */}
                <p className="text-sm text-slate-400 font-medium">Dev by Tarasato, Xato Empire</p>
            </div>

        </body>
    )
}
