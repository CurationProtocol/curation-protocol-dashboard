"use client"

interface RadialGaugeProps {
  value: number
  max: number
}

export function RadialGauge({ value, max }: RadialGaugeProps) {
  const percentage = (value / max) * 100
  const circumference = 2 * Math.PI * 45
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <div className="relative w-32 h-32">
      <svg className="w-full h-full" viewBox="0 0 120 120">
        {/* Background circle */}
        <circle
          cx="60"
          cy="60"
          r="45"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          className="text-border"
        />
        
        {/* Progress circle */}
        <circle
          cx="60"
          cy="60"
          r="45"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="text-accent transition-all duration-500"
          style={{ transform: "rotate(-90deg)", transformOrigin: "60px 60px" }}
        />
      </svg>
      
      {/* Center text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl font-bold text-accent font-mono">{percentage.toFixed(0)}%</div>
        </div>
      </div>
    </div>
  )
}
