import { useState, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Megaphone,
  Users,
  Calendar,
  Bell,
  Filter,
  X,
  FileText,
  ChevronDown,
  Building2,
  ArrowRight
} from 'lucide-react';
import bulletinsJson from '../appdata/bulletins_data.json';
import '../App.css';

// Categories from schema enum
const categories = [
  {
    value: 'ALL',
    label: 'All Posts',
    icon: Megaphone,
    color: 'amber'
  },
  {
    value: 'COMMUNITY_ADMIN',
    label: 'Community Admin',
    icon: Bell,
    color: 'slate'
  },
  {
    value: 'CHIEF_COUNCIL',
    label: 'Chief & Council',
    icon: Users,
    color: 'blue'
  },
  {
    value: 'COMMUNITY_EVENTS',
    label: 'Community Events',
    icon: Calendar,
    color: 'pink'
  },
 
];

type Bulletin = {
  id: string;
  title: string;
  subject: string;
  content: string | null;
  poster_url: string | null;
  category: string;
  created: string;
  updated: string;
};

export default function Quick_news() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedBulletin, setSelectedBulletin] = useState<Bulletin | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Load bulletins from JSON, filtered by category
  const bulletins: Bulletin[] = useMemo(() => {
    const all = bulletinsJson as Bulletin[];
    const sorted = [...all].sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime());
    if (selectedCategory === 'ALL') return sorted;
    return sorted.filter(b => b.category === selectedCategory);
  }, [selectedCategory]);

  const openBulletinModal = useCallback((bulletin: Bulletin) => {
    setSelectedBulletin(bulletin);
    setIsModalOpen(true);
  }, []);

  const closeBulletinModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedBulletin(null);
  }, []);

  const featuredPost = useMemo(() => bulletins[0] || null, [bulletins]);
  const remainingPosts = useMemo(() => bulletins.slice(1), [bulletins]);

  return (
    <div className="w-full">
      {/* Poster Bulletin Modal */}
      {isModalOpen && selectedBulletin && selectedBulletin.poster_url && (
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={closeBulletinModal}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-3 sm:p-4 border-b border-stone-200 bg-gradient-to-r from-amber-700 to-amber-900">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="px-2 sm:px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white">
                  {categories.find(c => c.value === selectedBulletin.category)?.label}
                </div>
                <span className="text-white/80 text-xs sm:text-sm hidden sm:inline">
                  {new Date(selectedBulletin.created).toLocaleDateString('en-US', { 
                    month: 'long', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </span>
              </div>
              <button
                onClick={closeBulletinModal}
                className="p-2 rounded-full hover:bg-white/20 transition-colors text-white"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            <div className="overflow-y-auto max-h-[calc(90vh-60px)] sm:max-h-[calc(90vh-80px)]">
              <div className="relative w-full bg-stone-100 flex items-center justify-center">
                <img
                  src={selectedBulletin.poster_url || ''}
                  alt={selectedBulletin.title}
                  className="w-full h-auto object-contain max-h-[60vh] sm:max-h-[70vh]"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold text-stone-800 mb-2">{selectedBulletin.title}</h2>
                <p className="text-sm sm:text-base text-stone-600 whitespace-pre-wrap">{selectedBulletin.subject}</p>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Text Bulletin Modal */}
      {isModalOpen && selectedBulletin && !selectedBulletin.poster_url && (
        <div 
          className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-sm p-4 overflow-y-auto"
          onClick={closeBulletinModal}
        >
          <div className="min-h-full flex items-start justify-center py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-3 sm:p-4 border-b border-stone-200 bg-gradient-to-r from-amber-700 to-amber-900 rounded-t-2xl">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="px-2 sm:px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white">
                    {categories.find(c => c.value === selectedBulletin.category)?.label}
                  </div>
                  <span className="text-white/80 text-xs sm:text-sm hidden sm:inline">
                    {new Date(selectedBulletin.created).toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </span>
                </div>
                <button
                  onClick={closeBulletinModal}
                  className="p-2 rounded-full hover:bg-white/20 transition-colors text-white"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>

              {/* Text Content */}
              <div className="p-6 sm:p-8 bg-gradient-to-br from-amber-50 to-stone-50">
                {selectedBulletin.content ? (
                  <div 
                    className="text-stone-700 leading-relaxed font-serif text-base"
                    dangerouslySetInnerHTML={{ 
                      __html: selectedBulletin.content
                        .replace(/style="[^"]*"/g, '')
                        .replace(/&nbsp;/g, ' ')
                    }}
                  />
                ) : (
                  <div className="text-center text-stone-400 py-12">
                    <FileText className="w-12 h-12 mx-auto mb-2" />
                    <span>No content available</span>
                  </div>
                )}
              </div>

              {/* Bulletin Details */}
              <div className="p-4 sm:p-6 border-t border-stone-200">
                <h2 className="text-xl sm:text-2xl font-bold text-stone-800 mb-2">{selectedBulletin.title}</h2>
                <p className="text-sm sm:text-base text-stone-600">{selectedBulletin.subject}</p>
              </div>
            </motion.div>
          </div>
        </div>
      )}

      <div className="pb-6">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-6">
          
          {/* Mobile Header with Filter */}
          <div className="lg:hidden mb-4">
            <div className="flex items-center gap-2 mb-3">
              <Megaphone className="w-5 h-5 text-amber-700" />
              <h1 className="text-lg font-bold text-stone-800">Bulletin Board</h1>
              <span className="text-sm text-stone-500">Sample View</span>
            </div>
            
            {/* Mobile Category Filter Button */}
            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="w-full flex items-center justify-between p-3 bg-white rounded-xl border border-stone-200 shadow-sm"
            >
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-amber-700" />
                <span className="text-sm font-medium text-stone-700">
                  {categories.find(c => c.value === selectedCategory)?.label || 'All Posts'}
                </span>
              </div>
              <ChevronDown className={`w-4 h-4 text-stone-400 transition-transform ${mobileFilterOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileFilterOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 bg-white rounded-xl border border-stone-200 shadow-md overflow-hidden"
              >
                {categories.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => {
                      setSelectedCategory(cat.value);
                      setMobileFilterOpen(false);
                    }}
                    className={`w-full p-3 transition-all text-left flex items-center gap-3 ${
                      selectedCategory === cat.value
                        ? 'bg-amber-100'
                        : 'hover:bg-stone-50'
                    }`}
                  >
                    <cat.icon className={`w-5 h-5 ${
                      selectedCategory === cat.value ? 'text-amber-700' : 'text-stone-500'
                    }`} />
                    <span className={`font-medium ${
                      selectedCategory === cat.value ? 'text-amber-900' : 'text-stone-700'
                    }`}>
                      {cat.label}
                    </span>
                  </button>
                ))}
              </motion.div>
            )}
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
            
            {/* LEFT SIDEBAR - Category Filter (Desktop only) */}
            <aside className="hidden lg:block lg:col-span-3 space-y-4 overscroll-y-none">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-sm border border-stone-200 p-4 sticky top-24"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Filter className="w-5 h-5 text-amber-700" />
                  <h3 className="font-bold text-stone-800">Categories</h3>
                </div>
                <div className="space-y-1">
                  {categories.map((cat) => (
                    <button
                      key={cat.value}
                      onClick={() => setSelectedCategory(cat.value)}
                      className={`w-full p-3 rounded-lg transition-all text-left ${
                        selectedCategory === cat.value
                          ? 'bg-amber-100 border border-amber-300'
                          : 'hover:bg-stone-50 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <cat.icon className={`w-5 h-5 ${
                          selectedCategory === cat.value ? 'text-amber-700' : 'text-stone-500'
                        }`} />
                        <span className={`text-sm font-medium ${
                          selectedCategory === cat.value ? 'text-amber-900' : 'text-stone-700'
                        }`}>
                          {cat.label}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            </aside>

            {/* MAIN CONTENT - Bulletin Posts Feed */}
            <main className="lg:col-span-6 space-y-4 sm:space-y-6 overscroll-y-auto">
              {/* Desktop Page Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="hidden lg:block bg-gradient-to-r from-amber-700 to-amber-900 rounded-2xl shadow-lg p-6 text-white"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-4">
                    <Megaphone className="w-8 h-8" />
                    <h1 className="text-2xl font-bold">Community Bulletin Board</h1>
                  </div>
                  <span className="text-amber-200 text-sm">Sample View</span>
                </div>
                <p className="text-amber-50">Stay informed with the latest announcements, events, and updates from Tataskweyak Cree Nation</p>
              </motion.div>

              {/* Featured Latest Post */}
              {featuredPost && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => openBulletinModal(featuredPost)}
                  className="bg-white rounded-2xl shadow-lg border-2 border-amber-200 overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
                >
                  <div className="bg-gradient-to-r from-amber-50 to-amber-100/50 px-5 py-3 border-b border-amber-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-700 text-white">
                          Latest
                        </span>
                        <span className="text-xs font-semibold text-amber-800 uppercase">
                          {categories.find(c => c.value === featuredPost.category)?.label}
                        </span>
                      </div>
                      <span className="text-xs text-amber-700 font-medium">
                        {new Date(featuredPost.created).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="font-bold text-2xl text-stone-800 mb-3 group-hover:text-amber-800 transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-stone-600 mb-4 line-clamp-3 text-base leading-relaxed">
                      {featuredPost.subject}
                    </p>
                    <div className="flex items-center text-amber-700 font-semibold group-hover:text-amber-800 transition-colors">
                      <span>Read Full Post</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Recent Posts Grid */}
              {remainingPosts.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-stone-600 px-1 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Recent Posts
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {remainingPosts.map((post, index) => (
                      <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        onClick={() => openBulletinModal(post)}
                        className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-md hover:border-amber-300 transition-all cursor-pointer group"
                      >
                        <div className="p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <div className={`w-2 h-2 rounded-full bg-${categories.find(c => c.value === post.category)?.color || 'amber'}-500`}></div>
                            <span className="text-xs font-semibold text-stone-500 uppercase truncate">
                              {categories.find(c => c.value === post.category)?.label}
                            </span>
                          </div>
                          <h3 className="font-bold text-base text-stone-800 mb-2 line-clamp-2 group-hover:text-amber-800 transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-sm text-stone-600 mb-3 line-clamp-2">{post.subject}</p>
                          <div className="flex items-center justify-between text-xs text-stone-500">
                            <span>{new Date(post.created).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                            <span className="text-amber-700 font-medium group-hover:text-amber-800">View →</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {bulletins.length === 0 && (
                <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-12 text-center">
                  <Megaphone className="w-12 h-12 text-stone-300 mx-auto mb-4" />
                  <p className="text-stone-600">No posts in this category yet.</p>
                </div>
              )}
            </main>

            {/* RIGHT SIDEBAR (Desktop only) */}
            <aside className="hidden lg:block lg:col-span-3 space-y-4 overscroll-y-none">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="sticky top-24 space-y-4"
              >
                {/* Info Card */}
                <div className="bg-gradient-to-br from-amber-700 to-amber-900 rounded-2xl shadow-lg p-5 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-xl bg-white/20">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg">TCN Achimowin</h3>
                  </div>
                  <p className="text-amber-100 text-sm mb-4">
                    This is a sample view of the bulletin board feature available to registered members.
                  </p>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Bell className="w-5 h-5 text-amber-700" />
                    <h3 className="font-bold text-stone-800">Stay Updated</h3>
                  </div>
                  <p className="text-sm text-stone-600">
                    Check back regularly for the latest community announcements and important updates.
                  </p>
                </div>
              </motion.div>              
            </aside>

          </div>
        </div>
      </div>
    </div>
  );
}