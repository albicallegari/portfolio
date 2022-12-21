import './TabPanel.scss';

interface TabPanelProps {
  children?: React.ReactNode;
  index: string;
  value: string;
  selectedTab: string;
  extraClass?: string | undefined;
}

const TabPanel = (props: TabPanelProps) => {
  const { index, children, selectedTab, ...other } = props;
  return (
    <div
      className="TabPanel"
      role="tabpanel"
      hidden={selectedTab !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {selectedTab === index && children}
    </div>
  );
};

export default TabPanel;
