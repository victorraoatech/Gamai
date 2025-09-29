import React, { useState } from 'react';
import { 
  BookOpen, 
  Users, 
  Award, 
  Calendar, 
  TrendingUp, 
  Bell,
  Search,
  Filter,
  Play,
  Clock,
  Star
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data - replace with real data from API
  const userStats = {
    coursesEnrolled: 5,
    coursesCompleted: 2,
    totalHours: 45,
    certificates: 2
  };

  const enrolledCourses = [
    {
      id: 1,
      title: 'Web Design for Beginners',
      instructor: 'John Doe',
      progress: 75,
      nextSession: '2025-01-15 10:00 AM',
      rating: 4.8
    },
    {
      id: 2,
      title: 'Data Analytics with Python',
      instructor: 'Jane Smith',
      progress: 30,
      nextSession: '2025-01-16 2:00 PM',
      rating: 4.9
    },
    {
      id: 3,
      title: 'Project Management (PMP)',
      instructor: 'Mike Johnson',
      progress: 60,
      nextSession: '2025-01-17 11:00 AM',
      rating: 4.7
    }
  ];

  const upcomingSessions = [
    {
      id: 1,
      course: 'Web Design for Beginners',
      instructor: 'John Doe',
      date: '2025-01-15',
      time: '10:00 AM',
      type: 'Live Session'
    },
    {
      id: 2,
      course: 'Data Analytics with Python',
      instructor: 'Jane Smith',
      date: '2025-01-16',
      time: '2:00 PM',
      type: 'Mentorship'
    }
  ];

  const StatCard = ({ icon, title, value, color }) => (
    <div className="rounded-2xl border border-white/20 bg-white/30 backdrop-blur-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
        </div>
        <div className={`p-3 rounded-full ${color}`}>
          {icon}
        </div>
      </div>
    </div>
  );

  const CourseCard = ({ course }) => (
    <div className="rounded-2xl border border-white/20 bg-white/30 backdrop-blur-lg shadow-lg p-6 hover:shadow-xl transition-all hover:scale-[1.02]">
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-semibold text-gray-900 text-lg">{course.title}</h3>
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-500 fill-current" />
          <span className="text-sm text-gray-600">{course.rating}</span>
        </div>
      </div>
      
      <p className="text-gray-600 mb-4">Instructor: {course.instructor}</p>
      
      <div className="mb-4">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-600">Progress</span>
          <span className="font-medium">{course.progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${course.progress}%` }}
          ></div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Clock className="w-4 h-4" />
          <span>Next: {course.nextSession}</span>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all">
          <Play className="w-4 h-4" />
          Continue
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#D2CCD9] flex flex-col">
      <Header />
      
      <div className="flex-1 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Student!</h1>
            <p className="text-gray-600">Continue your learning journey and achieve your goals.</p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard
              icon={<BookOpen className="w-6 h-6 text-white" />}
              title="Courses Enrolled"
              value={userStats.coursesEnrolled}
              color="bg-blue-500"
            />
            <StatCard
              icon={<Award className="w-6 h-6 text-white" />}
              title="Completed"
              value={userStats.coursesCompleted}
              color="bg-green-500"
            />
            <StatCard
              icon={<Clock className="w-6 h-6 text-white" />}
              title="Learning Hours"
              value={userStats.totalHours}
              color="bg-orange-500"
            />
            <StatCard
              icon={<TrendingUp className="w-6 h-6 text-white" />}
              title="Certificates"
              value={userStats.certificates}
              color="bg-purple-500"
            />
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-1 mb-8 bg-white/20 backdrop-blur-sm rounded-lg p-1">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'courses', label: 'My Courses' },
              { id: 'sessions', label: 'Upcoming Sessions' },
              { id: 'certificates', label: 'Certificates' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-md font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-white text-purple-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content based on active tab */}
          {activeTab === 'overview' && (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Recent Activity */}
              <div className="lg:col-span-2">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Continue Learning</h2>
                <div className="space-y-6">
                  {enrolledCourses.slice(0, 2).map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Upcoming Sessions */}
                <div className="rounded-2xl border border-white/20 bg-white/30 backdrop-blur-lg shadow-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Upcoming Sessions
                  </h3>
                  <div className="space-y-3">
                    {upcomingSessions.map((session) => (
                      <div key={session.id} className="p-3 bg-white/40 rounded-lg">
                        <p className="font-medium text-sm text-gray-900">{session.course}</p>
                        <p className="text-xs text-gray-600">{session.instructor}</p>
                        <p className="text-xs text-purple-600 font-medium mt-1">
                          {session.date} at {session.time}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Notifications */}
                <div className="rounded-2xl border border-white/20 bg-white/30 backdrop-blur-lg shadow-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Bell className="w-5 h-5" />
                    Recent Notifications
                  </h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-white/40 rounded-lg">
                      <p className="text-sm text-gray-900">New assignment available in Web Design</p>
                      <p className="text-xs text-gray-600">2 hours ago</p>
                    </div>
                    <div className="p-3 bg-white/40 rounded-lg">
                      <p className="text-sm text-gray-900">Mentorship session scheduled</p>
                      <p className="text-xs text-gray-600">1 day ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900">My Courses</h2>
                <div className="flex gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search courses..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/50"
                    />
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-white/50 transition-colors">
                    <Filter className="w-4 h-4" />
                    Filter
                  </button>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {enrolledCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </div>
          )}

          {activeTab === 'sessions' && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Upcoming Sessions</h2>
              <div className="space-y-4">
                {upcomingSessions.map((session) => (
                  <div key={session.id} className="rounded-2xl border border-white/20 bg-white/30 backdrop-blur-lg shadow-lg p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">{session.course}</h3>
                        <p className="text-gray-600">with {session.instructor}</p>
                        <div className="flex items-center gap-4 mt-2">
                          <span className="text-sm text-purple-600 font-medium">{session.type}</span>
                          <span className="text-sm text-gray-600">{session.date} at {session.time}</span>
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all">
                        Join Session
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'certificates' && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">My Certificates</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="rounded-2xl border border-white/20 bg-white/30 backdrop-blur-lg shadow-lg p-6 text-center">
                  <Award className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Web Design Fundamentals</h3>
                  <p className="text-gray-600 text-sm mb-4">Completed on Dec 15, 2024</p>
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all">
                    Download Certificate
                  </button>
                </div>
                <div className="rounded-2xl border border-white/20 bg-white/30 backdrop-blur-lg shadow-lg p-6 text-center">
                  <Award className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Software Testing Foundation</h3>
                  <p className="text-gray-600 text-sm mb-4">Completed on Nov 28, 2024</p>
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all">
                    Download Certificate
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;