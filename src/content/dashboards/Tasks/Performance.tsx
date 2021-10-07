import {
  Card,
  Box,
  CardContent,
  CardHeader,
  Typography,
  Avatar,
  LinearProgress
} from '@material-ui/core';

import { experimentalStyled } from '@material-ui/core/styles';
import AssignmentTurnedInTwoToneIcon from '@material-ui/icons/AssignmentTurnedInTwoTone';
import CancelPresentationTwoToneIcon from '@material-ui/icons/CancelPresentationTwoTone';

const RootWrapper = experimentalStyled(Card)(
  ({ theme }) => `
    background: ${theme.colors.gradients.green1};
    color: ${theme.colors.alpha.white[100]};
    
    .MuiCardHeader-title {
      color: ${theme.colors.alpha.white[100]};
    }
`
);

const AvatarSuccess = experimentalStyled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.alpha.white[100]};
      color: ${theme.palette.success.contrastText};
      width: ${theme.spacing(8)};
      height: ${theme.spacing(8)};
      box-shadow: ${theme.colors.shadows.success};
`
);

const AvatarError = experimentalStyled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.error.main};
      color: ${theme.palette.error.contrastText};
      width: ${theme.spacing(8)};
      height: ${theme.spacing(8)};
      box-shadow: ${theme.colors.shadows.error};
`
);

const TypographySecondary = experimentalStyled(Typography)(
  ({ theme }) => `
      color: ${theme.colors.alpha.white[70]};
`
);

const LinearProgressWrapper = experimentalStyled(LinearProgress)(
  ({ theme }) => `
        flex-grow: 1;
        margin-right: ${theme.spacing(1)};
        height: 10px;
        background-color: ${theme.colors.error.main};

        .MuiLinearProgress-barColorPrimary {
          background-color: ${theme.colors.alpha.white[100]};
          border-top-right-radius: ${theme.general.borderRadius};
          border-bottom-right-radius: ${theme.general.borderRadius};
        }
`
);

function Performance() {
  

  return (
    <RootWrapper sx={{ p: 1 }}>
      <CardHeader
        title="Performance"
        titleTypographyProps={{ variant: 'h3' }}
      />
      <CardContent>
        <Box display="flex" sx={{ px: 2, pb: 3 }} alignItems="center">
          <AvatarSuccess sx={{ mr: 2 }} variant="rounded">
            <AssignmentTurnedInTwoToneIcon fontSize="large" />
          </AvatarSuccess>
          <Box>
            <Typography variant="h1">23</Typography>
            <TypographySecondary variant="subtitle2" noWrap>
              tasks created
            </TypographySecondary>
          </Box>
        </Box>
        <Box display="flex" sx={{ px: 2, pb: 3 }} alignItems="center">
          <AvatarError sx={{ mr: 2 }} variant="rounded">
            <CancelPresentationTwoToneIcon fontSize="large" />
          </AvatarError>
          <Box>
            <Typography variant="h1">5</Typography>
            <TypographySecondary variant="subtitle2" noWrap>
              tasks closed
            </TypographySecondary>
          </Box>
        </Box>
        <Box pt={3}>
          <LinearProgressWrapper
            value={73}
            color="primary"
            variant="determinate"
          />
        </Box>
      </CardContent>
    </RootWrapper>
  );
}

export default Performance;
