function ArticlesPage() {
    return ( 
        <div className="w-full max-w-[720px] space-y-10">
            <div className="space-y-8">
                <h1 className="md:text-5xl text-4xl font-bold">Articles</h1>
                <p className="font-medium text-brand">
                Collection of articles about architecting and building the Interfaces Design System. Follow
                along as I document the journey, decisions, and technical insights.
                </p>
            </div>
            <div className="pl-4 pt-4 pb-5 pr-8 rounded-lg space-y-6 border border-accent">
                <p className="text-xs text-brand">March 17, 2025</p>
                <p className="text-xl font-semibold">Interfaces: A Personal Design System Journey for Modern Web Apps</p>
                <p className="text-brand">
                An exploration of why I decided to create a new design system from scratch, the
                goals behind the project, and how it aims to solve common UI development 
                challenges.
                </p>
                <button className="border py-4 px-6 border-accent rounded-sm hover:bg-accent cursor-pointer" type="button">Read More</button>
            </div>
        </div>
     );
}

export default ArticlesPage;