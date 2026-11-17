import { LoadingSkeleton, CardSkeleton } from '@/components/ui/LoadingSkeleton';

export default function Loading() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      {/* Header Skeleton */}
      <div className="h-20 bg-white border-b border-slate-200/80 px-8 flex items-center justify-between">
        <LoadingSkeleton className="w-48 h-10" />
        <div className="hidden lg:flex items-center gap-6">
          <LoadingSkeleton className="w-16 h-4" />
          <LoadingSkeleton className="w-16 h-4" />
          <LoadingSkeleton className="w-20 h-4" />
          <LoadingSkeleton className="w-16 h-4" />
          <LoadingSkeleton className="w-32 h-10" />
        </div>
      </div>

      {/* Main Content Skeleton */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-1 w-full space-y-12">
        <div className="max-w-3xl space-y-4">
          <LoadingSkeleton className="w-40 h-6 rounded-full" />
          <LoadingSkeleton className="w-full h-12" />
          <LoadingSkeleton className="w-3/4 h-12" />
          <LoadingSkeleton className="w-2/3 h-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
      </main>
    </div>
  );
}
