import { Outlet } from 'react-router-dom';
import StudentSidebar from '../components/student/StudentSidebar';

export default function StudentLayout() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <StudentSidebar />
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
