export const NavBarPath = {

    historic:
        [
            { label: "AGENDA", path: "/calendar" },
            { label: "HISTÓRICO", path: "/schedulingHistory" }
        ],

    users:
        [
            { label: "ADMINISTRADOR", path: "/manage/admins" },
            { label: "EDITOR", path: "/manage/editors" },
            { label: "PROPRIETÁRIO", path: "/manage/proprietors" },
            { label: "CORRETOR", path: "/manage/realtors" },
            { label: "USUÁRIO", path: "/manage/customers" },          
        ],

    policy:
        [
            { label: "POLÍTICA", path: "/privacyPolicy" },
            { label: "TERMOS", path: "/termsOfService" },
        ],

    reports:
        [
            { label: "CORRETOR", path: "./realtorReports" },
            { label: "USUÁRIO", path: "./userReports" },
            { label: "IMÓVEL", path: "/propertyReports" },
        ],
  
}