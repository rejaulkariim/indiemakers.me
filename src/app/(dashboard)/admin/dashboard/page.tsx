import { getUserById } from '@/lib/actions/user.actions';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

const AdminDashboardPage = async () => {
  const { userId: clerkId } = auth();

  const mongoUser = await getUserById({ userId: clerkId });
  console.log(mongoUser.role !== 'admin', 'mongouser from admin dashboard');

  if (mongoUser.role !== 'admin') {
    redirect('/');
  }

  return <div>AdminDashboardPage</div>;
};

export default AdminDashboardPage;
