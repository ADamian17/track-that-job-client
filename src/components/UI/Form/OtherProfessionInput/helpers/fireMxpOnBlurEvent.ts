import { toSeconds } from "../../../utils/toSeconds";
import { fireMxpEvent } from "../../../utils/mixpanelEvents/mixpanelEvents";

type HandleBlurOpMxpType = {
  value: string;
  hasError: boolean;
  timeIn: number;
};

const fireMxpOnBlurEvent = ({
  value,
  hasError,
  timeIn,
}: HandleBlurOpMxpType) => {
  const sp_time = toSeconds(Date.now() - timeIn) / 1000;

  const mixPanelData = {
    $current_url: window.location.href,
    sp_error: hasError,
    sp_field: "other_profession",
    sp_time,
    sp_value: value,
  };

  setTimeout(() => {
    fireMxpEvent("user: sign up field updated", mixPanelData);
  }, 1000);
};

export default fireMxpOnBlurEvent;
