declare module "*.module.css";
declare module "*.json" {
  const value: any;
  export default value;
}
declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
