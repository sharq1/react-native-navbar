const NAV_BAR_HEIGHT = 72;
const STATUS_BAR_HEIGHT = 20;

module.exports = {
  navBarContainer: {
    backgroundColor: '#FBFBFB',
  },
  statusBar: {
    height: STATUS_BAR_HEIGHT,
  },
  navBar: {
    height: NAV_BAR_HEIGHT,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  customTitle: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 7,
    alignItems: 'center',
  },
  navBarButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  navBarButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navBarButtonText: {
    marginLeft: 7,
    marginRight: 7,
    fontSize: 16,
    letterSpacing: 0.1,
    fontFamily: 'Lato-regular',
  },
  navBarTitleContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navBarTitleText: {
    fontSize: 18.5,
    letterSpacing: 0,
    color: '#333',
    fontFamily: 'Lato-bold',
  },
};
