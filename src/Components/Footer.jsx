import logo from '../assets/line.png';

export default function TopNoticeBar() {
  return (
    <div className="w-full bg-black py-10">
      <img src={logo} alt="Logo" className="w-full mb-6" />
      <p className="font-bigshoulders font-bold text-[16px] lg:text-base leading-[39px] tracking-normal text-center text-white/80 uppercase">
        No Spam | No Pressure | Just a Conversation About Your Next Event
      </p>
    </div>
  );
}