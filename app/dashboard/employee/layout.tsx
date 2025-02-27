import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'
import DashboardLayout from '@/components/layouts/DashboardLayout'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

export default async function EmployeeDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  if (!session?.user) {
    redirect('/login')
  }

  return <DashboardLayout>{children}</DashboardLayout>
} 