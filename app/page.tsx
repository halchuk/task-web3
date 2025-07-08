"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Wallet, Plus, CheckCircle2, Clock, ListTodo, Coins, Calendar, User, AlertCircle, Zap } from "lucide-react"

export default function Web3TaskManager() {
  const [isWalletConnected, setIsWalletConnected] = useState(false)
  const [isConnecting, setIsConnecting] = useState(false)

  const handleConnectWallet = async () => {
    setIsConnecting(true)
    // Simular conexão da carteira
    setTimeout(() => {
      setIsWalletConnected(true)
      setIsConnecting(false)
    }, 2000)
  }

  const handleDisconnectWallet = () => {
    setIsWalletConnected(false)
  }

  // Dados de exemplo
  const metrics = {
    totalTasks: 12,
    completedTasks: 8,
    pendingTasks: 4,
    weiStaked: "2.5",
  }

  const tasks = [
    {
      id: 1,
      name: "Implementar Smart Contract",
      status: "completed",
      description: "Desenvolver e testar o contrato inteligente para gerenciamento de tarefas",
      createdAt: "2024-01-15",
      completedAt: "2024-01-18",
      weiValue: "0.5",
    },
    {
      id: 2,
      name: "Integração com MetaMask",
      status: "completed",
      description: "Conectar a aplicação com carteiras Web3",
      createdAt: "2024-01-16",
      completedAt: "2024-01-19",
      weiValue: "0.3",
    },
    {
      id: 3,
      name: "Testes de Segurança",
      status: "pending",
      description: "Realizar auditoria completa do sistema",
      createdAt: "2024-01-20",
      completedAt: null,
      weiValue: "1.0",
    },
    {
      id: 4,
      name: "Deploy na Mainnet",
      status: "pending",
      description: "Publicar o contrato na rede principal",
      createdAt: "2024-01-22",
      completedAt: null,
      weiValue: "0.7",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Cabeçalho */}
        <header className="mb-8">
          <div className="flex flex-col items-center gap-4 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                <ListTodo className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Web3 Task Manager
              </h1>
            </div>

            <Button
              onClick={isWalletConnected ? handleDisconnectWallet : handleConnectWallet}
              disabled={isConnecting}
              size="lg"
              className={`
                px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105
                ${
                  isWalletConnected
                    ? "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                    : "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                }
              `}
            >
              {isConnecting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                  Conectando...
                </>
              ) : isWalletConnected ? (
                <>
                  <CheckCircle2 className="mr-2 h-5 w-5" />
                  Carteira Conectada
                </>
              ) : (
                <>
                  <Wallet className="mr-2 h-5 w-5" />
                  Conectar Carteira
                </>
              )}
            </Button>
          </div>

          {!isWalletConnected && (
            <Alert className="border-amber-500/50 bg-amber-500/10 text-amber-200">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription className="text-center">
                Conecte sua carteira para gerenciar suas tarefas na blockchain
              </AlertDescription>
            </Alert>
          )}
        </header>

        {/* Seção de Métricas */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Zap className="h-6 w-6 text-blue-400" />
            Métricas em Tempo Real
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border-blue-500/30 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-blue-100">Total de Tarefas</CardTitle>
                <ListTodo className="h-4 w-4 text-blue-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">{metrics.totalTasks}</div>
                <p className="text-xs text-blue-200">Todas as tarefas criadas</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 border-green-500/30 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-green-100">Concluídas</CardTitle>
                <CheckCircle2 className="h-4 w-4 text-green-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">{metrics.completedTasks}</div>
                <p className="text-xs text-green-200">
                  {Math.round((metrics.completedTasks / metrics.totalTasks) * 100)}% do total
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-amber-500/20 to-orange-600/20 border-amber-500/30 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-amber-100">Pendentes</CardTitle>
                <Clock className="h-4 w-4 text-amber-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">{metrics.pendingTasks}</div>
                <p className="text-xs text-amber-200">Aguardando conclusão</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500/20 to-pink-600/20 border-purple-500/30 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-purple-100">Wei em Stake</CardTitle>
                <Coins className="h-4 w-4 text-purple-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">{metrics.weiStaked} ETH</div>
                <p className="text-xs text-purple-200">Valor total apostado</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Seção de Tarefas */}
        <section>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <ListTodo className="h-6 w-6 text-purple-400" />
              Tarefas
            </h2>

            <Button
              disabled={!isWalletConnected}
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
            >
              <Plus className="mr-2 h-4 w-4" />
              Nova Tarefa
            </Button>
          </div>

          <div className="space-y-4">
            {tasks.map((task) => (
              <Card
                key={task.id}
                className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-semibold text-white">{task.name}</h3>
                        <Badge
                          variant={task.status === "completed" ? "default" : "secondary"}
                          className={`
                            ${
                              task.status === "completed"
                                ? "bg-green-500/20 text-green-300 border-green-500/30"
                                : "bg-amber-500/20 text-amber-300 border-amber-500/30"
                            }
                          `}
                        >
                          {task.status === "completed" ? (
                            <>
                              <CheckCircle2 className="mr-1 h-3 w-3" />
                              Concluído
                            </>
                          ) : (
                            <>
                              <Clock className="mr-1 h-3 w-3" />
                              Pendente
                            </>
                          )}
                        </Badge>
                      </div>

                      <p className="text-slate-300 text-sm leading-relaxed">{task.description}</p>

                      <div className="flex flex-wrap gap-4 text-xs text-slate-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>Criado: {new Date(task.createdAt).toLocaleDateString("pt-BR")}</span>
                        </div>
                        {task.completedAt && (
                          <div className="flex items-center gap-1">
                            <CheckCircle2 className="h-3 w-3" />
                            <span>Concluído: {new Date(task.completedAt).toLocaleDateString("pt-BR")}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 lg:flex-col lg:items-end">
                      <div className="text-right">
                        <div className="text-sm text-slate-400">Valor em Wei</div>
                        <div className="text-lg font-bold text-purple-300">{task.weiValue} ETH</div>
                      </div>
                      <Coins className="h-5 w-5 text-purple-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {!isWalletConnected && (
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-lg border border-slate-700/50">
                <User className="h-4 w-4 text-slate-400" />
                <span className="text-slate-300 text-sm">
                  Conecte sua carteira para visualizar e gerenciar suas tarefas
                </span>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
