import * as React from "react";
import { StepParams } from "../interfaces";
import { ToolTips } from "../../constants";
import { StepWrapper, StepHeader, StepContent } from "../step_ui/index";
import { StepRadio } from "../step_ui/step_radio";
import { t } from "../../i18next_wrapper";

export function TileCalibrate(props: StepParams) {
  const { dispatch, currentStep, index, currentSequence } = props;
  const className = "calibrate-step";
  return <StepWrapper>
    <StepHeader
      className={className}
      helpText={ToolTips.CALIBRATION}
      currentSequence={currentSequence}
      currentStep={currentStep}
      dispatch={dispatch}
      index={index}
      confirmStepDeletion={props.confirmStepDeletion} />
    <StepContent className={className}>
      <StepRadio
        currentSequence={currentSequence}
        currentStep={currentStep}
        dispatch={dispatch}
        index={index}
        label={t("Calibrate")} />
    </StepContent>
  </StepWrapper>;
}
