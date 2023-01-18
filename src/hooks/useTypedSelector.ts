import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../state";

// useSelectorにタイプをつけて、タイプのついているselectorをコンポーネントで使う。
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
