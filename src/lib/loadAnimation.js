import "@/styles/nprogress_overrides.scss";
import NProgress from "nprogress";

export function startLoadAnimation () {
    NProgress.start();
    NProgress.set(0.1);
}

export function endLoadAnimation () {
    NProgress.done();
}
