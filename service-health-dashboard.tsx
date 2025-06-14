"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertTriangle, XCircle, Clock, Activity, Zap, Database, Shield, Cloud } from "lucide-react"

interface ServiceStatus {
  name: string
  status: "healthy" | "warning" | "critical"
  uptime: string
  responseTime: string
  lastChecked: string
  description: string
  icon: any
}

const services: ServiceStatus[] = [
  {
    name: "API Gateway",
    status: "healthy",
    uptime: "99.9%",
    responseTime: "45ms",
    lastChecked: "2 minutes ago",
    description: "Main API endpoint",
    icon: Zap,
  },
  {
    name: "Database",
    status: "healthy",
    uptime: "99.8%",
    responseTime: "12ms",
    lastChecked: "1 minute ago",
    description: "Primary PostgreSQL instance",
    icon: Database,
  },
  {
    name: "Cache Service",
    status: "warning",
    uptime: "98.5%",
    responseTime: "89ms",
    lastChecked: "3 minutes ago",
    description: "Redis cache cluster",
    icon: Shield,
  },
  {
    name: "File Storage",
    status: "critical",
    uptime: "95.2%",
    responseTime: "234ms",
    lastChecked: "5 minutes ago",
    description: "S3 compatible storage",
    icon: Cloud,
  },
]

const getStatusConfig = (status: ServiceStatus["status"]) => {
  switch (status) {
    case "healthy":
      return {
        icon: CheckCircle,
        color: "text-emerald-400",
        glowColor: "shadow-emerald-500/25",
        badgeClass:
          "bg-gradient-to-r from-emerald-500/20 to-green-500/20 text-emerald-300 border-emerald-500/30 shadow-lg shadow-emerald-500/20",
        cardGradient: "from-emerald-500/5 via-transparent to-transparent",
        borderGlow: "hover:shadow-emerald-500/20",
      }
    case "warning":
      return {
        icon: AlertTriangle,
        color: "text-amber-400",
        glowColor: "shadow-amber-500/25",
        badgeClass:
          "bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-amber-300 border-amber-500/30 shadow-lg shadow-amber-500/20",
        cardGradient: "from-amber-500/5 via-transparent to-transparent",
        borderGlow: "hover:shadow-amber-500/20",
      }
    case "critical":
      return {
        icon: XCircle,
        color: "text-red-400",
        glowColor: "shadow-red-500/25",
        badgeClass:
          "bg-gradient-to-r from-red-500/20 to-rose-500/20 text-red-300 border-red-500/30 shadow-lg shadow-red-500/20",
        cardGradient: "from-red-500/5 via-transparent to-transparent",
        borderGlow: "hover:shadow-red-500/20",
      }
  }
}

export default function ServiceHealthDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-purple-900/30 to-slate-900/50"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 70%)`,
          }}
        ></div>
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative p-6 max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-lg opacity-75"></div>
              <div className="relative p-3 rounded-2xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-xl border border-purple-500/20">
                <Activity className="h-8 w-8 text-purple-400" />
              </div>
            </div>
            <div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-2">
                Service Health Dashboard
              </h1>
              <p className="text-slate-400 text-xl">Monitor the status and performance of your services in real-time</p>
            </div>
          </div>
        </div>

        {/* Enhanced Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
            const config = getStatusConfig(service.status)
            const StatusIcon = config.icon
            const ServiceIcon = service.icon

            return (
              <Card
                key={index}
                className={`group relative overflow-hidden bg-gradient-to-br ${config.cardGradient} backdrop-blur-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 hover:shadow-2xl ${config.borderGlow} hover:-translate-y-2 transform-gpu`}
              >
                {/* Enhanced background with multiple layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/40 via-slate-900/60 to-black/40"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                {/* Animated border gradient */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/20 via-transparent to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

                <CardHeader className="relative pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-600 to-slate-700 rounded-xl blur-md opacity-50"></div>
                        <div className="relative p-3 rounded-xl bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-slate-600/30">
                          <ServiceIcon className="h-6 w-6 text-slate-300" />
                        </div>
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold text-white group-hover:text-slate-100 transition-colors">
                          {service.name}
                        </CardTitle>
                        <p className="text-slate-400 text-sm mt-1">{service.description}</p>
                      </div>
                    </div>
                    <div
                      className={`relative p-4 rounded-full bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-slate-600/30 ${config.glowColor} shadow-xl`}
                    >
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <StatusIcon className={`h-6 w-6 ${config.color} drop-shadow-lg relative z-10`} />
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="relative space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Status</span>
                    <Badge className={`${config.badgeClass} border font-semibold px-4 py-2 text-sm`}>
                      {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="relative group/metric">
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-700/20 to-slate-800/40 rounded-xl blur-sm"></div>
                      <div className="relative space-y-3 p-4 rounded-xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-600/20 group-hover/metric:border-slate-500/30 transition-colors">
                        <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Uptime</p>
                        <p className="text-3xl font-black text-white">{service.uptime}</p>
                      </div>
                    </div>
                    <div className="relative group/metric">
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-700/20 to-slate-800/40 rounded-xl blur-sm"></div>
                      <div className="relative space-y-3 p-4 rounded-xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-600/20 group-hover/metric:border-slate-500/30 transition-colors">
                        <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Response</p>
                        <p className="text-3xl font-black text-white">{service.responseTime}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-slate-500 pt-4 border-t border-slate-700/50">
                    <Clock className="h-4 w-4 mr-3 text-slate-400" />
                    <span className="font-medium">Last checked {service.lastChecked}</span>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Enhanced Summary Section */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-800/40 via-slate-700/40 to-slate-800/40 rounded-3xl blur-xl"></div>
          <div className="relative p-8 rounded-3xl bg-gradient-to-r from-slate-800/60 via-slate-800/40 to-slate-800/60 backdrop-blur-2xl border border-slate-700/50 shadow-2xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Overall System Health</h3>
                <p className="text-slate-400 text-lg">Real-time monitoring across all services</p>
              </div>
              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-4 h-4 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full shadow-lg shadow-emerald-500/50"></div>
                    <div className="absolute inset-0 w-4 h-4 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full animate-ping opacity-20"></div>
                  </div>
                  <span className="text-slate-200 font-semibold text-lg">2 Healthy</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-4 h-4 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full shadow-lg shadow-amber-500/50"></div>
                    <div className="absolute inset-0 w-4 h-4 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full animate-ping opacity-20"></div>
                  </div>
                  <span className="text-slate-200 font-semibold text-lg">1 Warning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-4 h-4 bg-gradient-to-r from-red-400 to-rose-400 rounded-full shadow-lg shadow-red-500/50"></div>
                    <div className="absolute inset-0 w-4 h-4 bg-gradient-to-r from-red-400 to-rose-400 rounded-full animate-ping opacity-20"></div>
                  </div>
                  <span className="text-slate-200 font-semibold text-lg">1 Critical</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Floating Action Button */}
        <div className="fixed bottom-8 right-8">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
            <button className="relative p-5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110 group border border-purple-400/20">
              <Activity className="h-7 w-7 text-white group-hover:rotate-180 transition-transform duration-700" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
