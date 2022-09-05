import "./cache-stats.css";

interface CacheStatsRowProps {
  label: string;
  extra_label?: string;
  data?: string;
}

const CacheStatsRow = ({label, extra_label, data}: CacheStatsRowProps) => {
  return (
    <div className="cache-stats--row">
      <span className="stats--row--label">{label}</span>
      {extra_label && <span className="stats--row--label">{extra_label}</span>}
      {data && <span className="stats--row--data">{data}</span>}
    </div>
  )
}

export default CacheStatsRow;