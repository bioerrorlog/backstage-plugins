import React, {
  type HTMLAttributes,
  type PropsWithChildren,
  type ReactNode,
  Fragment,
} from 'react';

import { type Theme, makeStyles } from '@material-ui/core';
import type { Workspace } from '../../typesConstants';
import { useWorkspacesCardContext } from './Root';
import { WorkspacesListItem } from './WorkspacesListItem';

const usePlaceholderStyles = makeStyles(theme => ({
  root: {
    padding: `${theme.spacing(2.5)}px 0px ${theme.spacing(2)}px`,
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
  },

  coderLogo: {
    fill: theme.palette.text.primary,
    opacity: 1,
  },

  text: {
    fontWeight: 400,
    fontSize: '1.125rem',
    color: theme.palette.text.secondary,
    lineHeight: 1.1,
  },
}));

type PlaceholderProps = Readonly<PropsWithChildren<unknown>>;

// Placeholder is being treated as an internal implementation detail, and is
// not expected to need much flexibility at the API level
const Placeholder = ({ children }: PlaceholderProps) => {
  const styles = usePlaceholderStyles();

  return (
    <div className={styles.root}>
      <svg
        aria-hidden
        className={styles.coderLogo}
        viewBox="0 0 68 49"
        width="40"
      >
        <path d="M66.3575 21.3584C65.0024 21.3584 64.099 20.5638 64.099 18.9328V9.5647C64.099 3.58419 61.6353 0.280273 55.2705 0.280273H52.314V6.59536H53.2174C55.7222 6.59536 56.913 7.97547 56.913 10.443V18.7237C56.913 22.3203 57.9807 23.7841 60.3212 24.5369C57.9807 25.2479 56.913 26.7534 56.913 30.3501C56.913 32.3994 56.913 34.4486 56.913 36.4979C56.913 38.2126 56.913 39.8855 56.4613 41.6002C56.0097 43.1894 55.2705 44.695 54.244 45.9914C53.6691 46.7442 53.0121 47.3716 52.2729 47.9571V48.7935H55.2295C61.5942 48.7935 64.058 45.4896 64.058 39.5091V30.141C64.058 28.4681 64.9203 27.7153 66.3164 27.7153H68V21.4003H66.3575V21.3584Z" />
        <path d="M46.2367 9.81532H37.1208C36.9155 9.81532 36.7512 9.64804 36.7512 9.43893V8.72796C36.7512 8.51885 36.9155 8.35156 37.1208 8.35156H46.2778C46.4831 8.35156 46.6473 8.51885 46.6473 8.72796V9.43893C46.6473 9.64804 46.442 9.81532 46.2367 9.81532Z" />
        <path d="M47.7971 18.8485H41.145C40.9396 18.8485 40.7754 18.6812 40.7754 18.4721V17.7612C40.7754 17.5521 40.9396 17.3848 41.145 17.3848H47.7971C48.0024 17.3848 48.1667 17.5521 48.1667 17.7612V18.4721C48.1667 18.6394 48.0024 18.8485 47.7971 18.8485Z" />
        <path d="M50.4251 14.3319H37.1208C36.9155 14.3319 36.7512 14.1646 36.7512 13.9555V13.2446C36.7512 13.0355 36.9155 12.8682 37.1208 12.8682H50.384C50.5894 12.8682 50.7536 13.0355 50.7536 13.2446V13.9555C50.7536 14.1228 50.6304 14.3319 50.4251 14.3319Z" />
        <path d="M26.5677 11.8649C27.4711 11.8649 28.3744 11.9485 29.2368 12.1577V10.443C29.2368 8.0173 30.4686 6.59536 32.9324 6.59536H33.8358V0.280273H30.8793C24.5145 0.280273 22.0508 3.58419 22.0508 9.5647V12.6595C23.488 12.1577 25.0073 11.8649 26.5677 11.8649Z" />
        <path d="M53.2174 34.6165C52.5603 29.3051 48.5362 24.872 43.3623 23.8683C41.9251 23.5755 40.4879 23.5337 39.0918 23.7847C39.0507 23.7847 39.0507 23.7428 39.0096 23.7428C36.7512 18.9333 31.9058 15.7549 26.6497 15.7549C21.3937 15.7549 16.5894 18.8497 14.2898 23.6592C14.2488 23.6592 14.2488 23.701 14.2077 23.701C12.7295 23.5337 11.2512 23.6174 9.77294 23.9938C4.68116 25.2484 0.821255 29.5979 0.123188 34.8674C0.0410628 35.4111 0 35.9548 0 36.4566C0 38.0459 1.06763 39.5096 2.62802 39.7187C4.55797 40.0115 6.24154 38.5059 6.20048 36.5821C6.20048 36.2894 6.20048 35.9548 6.24154 35.662C6.57004 32.9854 8.58212 30.7271 11.2101 30.0997C12.0314 29.8906 12.8526 29.8488 13.6328 29.9743C16.1377 30.3088 18.6014 29.0124 19.6691 26.754C20.4493 25.0811 21.6811 23.6174 23.3237 22.8228C25.1304 21.9445 27.1836 21.819 29.0724 22.4882C31.0435 23.1992 32.5217 24.7047 33.4251 26.5867C34.3695 28.4269 34.8212 29.7233 36.8333 29.9743C37.6546 30.0997 39.9541 30.0579 40.8164 30.0161C42.5 30.0161 44.1835 30.6016 45.3744 31.8144C46.1546 32.6509 46.7294 33.6964 46.9758 34.8674C47.3454 36.7494 46.8937 38.6314 45.785 40.0533C45.0048 41.057 43.9372 41.8098 42.7463 42.1444C42.1715 42.3117 41.5966 42.3535 41.0217 42.3535C40.6932 42.3535 40.2415 42.3535 39.7077 42.3535C38.0652 42.3535 34.5749 42.3535 31.9468 42.3535C30.1401 42.3535 28.7029 40.8897 28.7029 39.0496V32.86V26.7958C28.7029 26.294 28.2922 25.8757 27.7995 25.8757H26.5265C24.0217 25.9176 22.0096 28.7614 22.0096 31.7726C22.0096 34.7838 22.0096 42.7717 22.0096 42.7717C22.0096 46.0338 24.5966 48.6686 27.7995 48.6686C27.7995 48.6686 42.0483 48.6268 42.2536 48.6268C45.5386 48.2922 48.5773 46.5775 50.6304 43.9427C52.6835 41.3916 53.628 38.0459 53.2174 34.6165Z" />
      </svg>

      <p className={styles.text}>{children}</p>
    </div>
  );
};

type RenderListItemInput = Readonly<{
  workspace: Workspace;
  index: number;
  workspaces: readonly Workspace[];
}>;

type WorkspacesListProps = Readonly<
  Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
    emptyState?: ReactNode;
    ordered?: boolean;
    listClassName?: string;
    fullBleedLayout?: boolean;
    renderListItem?: (input: RenderListItemInput) => ReactNode;
  }
>;

type StyleKey = 'root' | 'list';

type WorkspacesListMakeStyleInputs = Readonly<{
  fullBleedLayout: boolean;
}>;

const useWorkspacesListStyles = makeStyles<
  Theme,
  WorkspacesListMakeStyleInputs,
  StyleKey
>(theme => ({
  root: ({ fullBleedLayout }) => ({
    maxHeight: '300px',
    overflowX: 'hidden',
    overflowY: 'auto',
    flexShrink: 1,

    marginLeft: fullBleedLayout ? `-${theme.spacing(2)}px` : 0,
    marginRight: fullBleedLayout ? `-${theme.spacing(2)}px` : 0,

    // Negative bottom margin is to ensure that the overflow bar doesn't look
    // weird when it kicks in; should figure out a way to implement this with
    // padding instead to prevent CSS styling side effects
    marginBottom: `-${theme.spacing(2)}px`,
  }),

  list: {
    margin: 0,
    paddingRight: theme.spacing(2),

    // Not using spacing(2) for optical adjustment; want to make sure all icons
    // are aligned by default
    paddingLeft: theme.spacing(1.75),
  },
}));

export const WorkspacesList = ({
  renderListItem,
  emptyState,
  className,
  listClassName,
  ordered = true,
  fullBleedLayout = true,
  ...delegatedProps
}: WorkspacesListProps) => {
  const { workspacesQuery, entityConfig } = useWorkspacesCardContext();
  const styles = useWorkspacesListStyles({ fullBleedLayout });

  const repoUrl = entityConfig?.repoUrl ?? '';
  const ListItemContainer = ordered ? 'ol' : 'ul';

  return (
    <div className={`${styles.root} ${className ?? ''}`} {...delegatedProps}>
      {workspacesQuery.isLoading && (
        <Placeholder>
          {workspacesQuery.fetchStatus === 'fetching' ? (
            <>Loading&hellip;</>
          ) : (
            <>Use the searchbar to find matching Coder workspaces</>
          )}
        </Placeholder>
      )}

      {workspacesQuery.data?.length === 0 && (
        <>
          {emptyState !== undefined ? (
            emptyState
          ) : (
            <Placeholder>
              {repoUrl ? (
                <div style={{ textAlign: 'center' }}>
                  No workspaces for repo
                  <br />
                  {repoUrl}
                </div>
              ) : (
                <>No workspaces returned for your query</>
              )}
            </Placeholder>
          )}
        </>
      )}

      {workspacesQuery.data && workspacesQuery.data.length > 0 && (
        <ListItemContainer className={`${styles.list} ${listClassName ?? ''}`}>
          {workspacesQuery.data?.map((workspace, index) => (
            <Fragment key={workspace.id}>
              {renderListItem !== undefined ? (
                renderListItem({
                  workspace,
                  index,
                  workspaces: workspacesQuery.data,
                })
              ) : (
                <WorkspacesListItem workspace={workspace} />
              )}
            </Fragment>
          ))}
        </ListItemContainer>
      )}
    </div>
  );
};
