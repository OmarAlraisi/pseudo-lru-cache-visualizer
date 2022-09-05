import { useSelector } from "react-redux";
import { Queries } from "../../../store/queries/app-queries";
import CacheStatsRow from "./cache-stats-row";
import "./cache-stats.css"

const CacheStats = () => {
  const { numOfEmptyBlocks, numOfHits, numOfMisses } = useSelector(
    Queries.getStats
  );
  return (
    <div className="cache-stats--main-root">
      <CacheStatsRow label="Empty Blocks" data={`${numOfEmptyBlocks}`}/>
      <CacheStatsRow label="Total Hits" data={`${numOfHits}`}/>
      <CacheStatsRow label="Total Misses" data={`${numOfMisses}`}/>
      <CacheStatsRow 
        label={`${((numOfHits / (numOfHits + numOfMisses)) * 100) | 0}% Hits`} 
        extra_label={`${((numOfMisses / (numOfHits + numOfMisses)) * 100) | 0}% Misses`} 
      />
    </div>
  )
}

export default CacheStats;