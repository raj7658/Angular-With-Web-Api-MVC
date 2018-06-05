using System.Web;
using System.Web.Optimization;

namespace Community
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            BundleTable.EnableOptimizations = false;
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/public/app/lib/js/jquery-{version}.min.js"));


            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/public/app/lib/js/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/public/app/lib/js/bootstrap.min.js",
                       "~/public/app/lib/js/jquery.appear.js",
                        "~/public/app/lib/js/jquery.unveil.js",
                      "~/public/app/lib/js/respond.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/angularjs").Include(
                            "~/public/app/lib/js/angular.js",
                            "~/public/app/lib/js/angular-animate.min.js",
                            "~/public/app/lib/js/angular-messages.min.js",
                            "~/public/app/lib/js/angular-resource.min.js",
                            "~/public/app/lib/js/angular-sanitize.min.js",
                            "~/public/app/lib/js/angular-ui-router.min.js",
                            "~/public/app/lib/js/angular-toastr.tpls.min.js",
                            "~/public/app/lib/js/ui-bootstrap.min.js",
                            "~/public/app/lib/js/ui-bootstrap-tpls.min.js",
                            "~/public/app/lib/js/angular-spinner.min.js",
                            "~/public/app/lib/js/angular-touch.min.js",
                            "~/public/app/lib/js/angular-area.min.js",
                            "~/public/app/lib/js/angular-loader.min.js",
                              "~/public/app/lib/js/satellizer.js"
                              ));
            bundles.Add(new ScriptBundle("~/scripts/configjs").Include("~/public/config.js", "~/public/app.js"));
            bundles.Add(new ScriptBundle("~/bundles/modulejs").IncludeDirectory("~/public/modules/", "*.js", true));
        }
    }
}
