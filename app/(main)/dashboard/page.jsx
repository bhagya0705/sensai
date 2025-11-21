import { getIndustryInsights } from "@/actions/dashboard"
import DashboardView from "./_components/dashboard-view";

const { getUserOnboardingStatus } = require("@/actions/user")
const { redirect } = require("next/navigation")

const IndustryInsightsPage = async() =>{
    const {isOnboarded} = await getUserOnboardingStatus();
    const insightss = await getIndustryInsights();
    if(!isOnboarded){
        redirect('/onboarding')
    }

    return(
        <div className="container mx-auto">
        <DashboardView insights={insightss} />
        </div>
    )
}

export default IndustryInsightsPage