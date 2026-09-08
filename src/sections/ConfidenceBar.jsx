export default function ConfidenceBar({ items }) {
  return (
    <section className="flex flex-wrap border-y border-[#2e0254b8] items-center justify-around gap-6 lg:gap-8 py-6 lg:py-8 bg-transparent">
      {items.map((item, index) => (
        <div key={index} className="flex flex-col items-start">
          {/* Mobile-first: texto menor por padrão, crescendo em lg: */}
          <span className="text-2xl lg:text-3xl font-bold text-white tracking-wide">
            {item.value}
          </span>
          <span className="text-[10px] lg:text-xs font-medium text-gray-400 tracking-widest mt-1">
            {item.label}
          </span>
        </div>
      ))}
    </section>
  );
}
