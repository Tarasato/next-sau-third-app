import Image from 'next/image'
import Link from 'next/link'

import calculator from './images/calculator.png'
import moneyshare from './images/moneyshare.png'
import bmi from './images/bmi.png'
import bmr from './images/bmr.png'
import car from './images/car.png'

export default function Home() {
  return (
    <div className="bg-slate-100 flex flex-col items-center justify-center min-h-screen p-4">

      {/* <!-- คอนเทนเนอร์หลักของหน้าเว็บ --> */}
      <div className="w-full max-w-6xl mx-auto py-10">

        {/* <!-- ส่วนหัวของหน้าเว็บ --> */}
        <header className="text-center mb-16">
          {/* <!-- โลโก้และชื่อเว็บ --> */}
          <div className="flex items-center justify-center mb-4">
            <Image src={calculator} alt="Calculator Logo" width={60} height={60} className="mr-3" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-800 mb-2">Calculator Varity</h1>
          <p className="text-xl text-slate-500 font-medium">เครื่องคำนวณ By Tarasato</p>
        </header>

        {/* <!-- ส่วนของ Card สำหรับเครื่องคำนวณต่างๆ --> */}
        <main>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* <!-- Card: Money Share --> */}
            <Link href="/moneyshare" className="group block bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex flex-col items-start">
                <Image src={moneyshare} alt="Money Share" width={60} height={60} className="mr-3" />
                <h2 className="text-2xl font-semibold text-slate-800 mb-2">Money Share</h2>
                <p className="text-slate-500 text-sm">เครื่องคำนวณสำหรับแบ่งจ่ายเงิน</p>
              </div>
            </Link>

            {/* <!-- Card: BMI --> */}
            <Link href="/bmi" className="group block bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex flex-col items-start">
                <Image src={bmi} alt="BMI Calculator" width={60} height={60} className="mr-3" />
                <h2 className="text-2xl font-semibold text-slate-800 mb-2">BMI Calculator</h2>
                <p className="text-slate-500 text-sm">คำนวณดัชนีมวลกาย</p>
              </div>
            </Link>

            {/* <!-- Card: BMR --> */}
            <Link href="/bmr" className="group block bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex flex-col items-start">
                <Image src={bmr} alt="BMR Calculator" width={60} height={60} className="mr-3" />
                <h2 className="text-2xl font-semibold text-slate-800 mb-2">BMR Calculator</h2>
                <p className="text-slate-500 text-sm">คำนวณอัตราการเผาผลาญพลังงานขั้นพื้นฐาน</p>
              </div>
            </Link>

            {/* <!-- Card: Car Installment --> */}
            <Link href="/carinstallment" className="group block bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex flex-col items-start">
                <Image src={car} alt="Car Installment" width={60} height={60} className="mr-3" />
                <h2 className="text-2xl font-semibold text-slate-800 mb-2">Car Installment</h2>
                <p className="text-slate-500 text-sm">คำนวณค่างวดรถยนต์</p>
              </div>
            </Link>

          </div>
        </main>
      </div>
      <footer className='mt-8 text-center text-red-700'>
        Created by Tarasato
        <br />
        Copyright &copy; 2025 Xato Empire
      </footer>
    </div>
  );
}
