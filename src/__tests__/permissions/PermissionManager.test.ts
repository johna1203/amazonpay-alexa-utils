import { PermissionManager } from '../../permissions/PermissionManager';

const granted = JSON.parse(
  JSON.stringify({
    version: '1.0',
    context: {
      System: {
        application: {
          applicationId: 'amzn1.ask.skill.67682825-4469-49b7-9a0c-858fb627da3d',
        },
        user: {
          userId:
            'amzn1.ask.account.AFYDVMYQJ6PFYOOO7FUGX3BYZCAPTUMHXWYRUYY27ZI2YTUW6B3SQPYLHP26AKD5G7UZXUEAKTLEYAHTGI2RI2N5FJTJ32XOK4BJHAWODVNJGLGLU63WKZWUFXBQOZHN6V5W2VSRRS4CIO3QGBBCFIFZIK5BQQFMD3S6F7VRSRBIJNEHVQLT2H7KSY5MUVKNP5XSGXH4YF26A7Y',
          permissions: {
            consentToken:
              'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjEifQ.eyJhdWQiOiJodHRwczovL2FwaS5hbWF6b25hbGV4YS5jb20iLCJpc3MiOiJBbGV4YVNraWxsS2l0Iiwic3ViIjoiYW16bjEuYXNrLnNraWxsLjY3NjgyODI1LTQ0NjktNDliNy05YTBjLTg1OGZiNjI3ZGEzZCIsImV4cCI6MTU1NjYzMDczMywiaWF0IjoxNTU2NjMwNDMzLCJuYmYiOjE1NTY2MzA0MzMsInByaXZhdGVDbGFpbXMiOnsiaXNEZXByZWNhdGVkIjoidHJ1ZSIsImNvbnNlbnRUb2tlbiI6IkF0emF8SXdFQklIeTBIbzA2NEc4N3hYSzU4N1p6LXgzSXZOOElIaWx2Y002T1NtbUxzLTlaeVotUDZxVVR4OUlpdjI2dHRhcWwydmxHZFRYcUtSNUF2NHUzbmRhRzdTYXN6WS1vaXZoUTlnUUdQN0FWNHZOUkpWV0p3Q1Bhd2N0S0ktaDRVOVBMYlIxdm5YcmFUZnoyRFBWa2FxQnhJazFmS2xyLS1hd1B2ZldmUDdrd2NxNHV4UlBxODYtNDRmX3lEbWtPNXh6R2x4MGFVeTFQV0ZSN1kxcEZVRWFrVE1KeG54aWphNEdlTFNCMGxHMkxzclNzakNMYXgyaGVzSjBIM1FmelFCNmo3OXF6MUxDNGVJMDdnMTBUM1UxUDREbUZxd1BtTG81TW9BTm4wdXlVNWQyMmpfb3JmaGdWek1vYXAxSlV1UUxBVnIwbkZLcll2SlZyUjVhN05TcVhEa2U2MER6ZWlScWZjYzFwc29fSWV0bUNDQV95ano3Z05DRlF4MmJQa0o1X1ZvVE1qWHlEbU1sZndmcDVRX2dRdzlRQVNkdUVZTEMyM2NhZGVvWk9WcnZsTFVmT3RPaExRNUpUdE5IWWlxLUFIYV9rbmJoNVdrWU9DWU9RbTNIRG5pME5RMFAyZ2prbmJzaEh5QkdWV2hzNmgzOTlwV1psSmljc3NkVGtfZDNiNVlUUHJOQlBhakoxSHY0RENSd3l3dGNUenBDeHpTLXdrN2ltOVF2MDJkUmtaQVVqanN5VGlMaE0zVjVoQThjQTYtWXRvRTNxeFEzc3FhZ0s1dlZpME80OTNaN2dpaHg2SVBub0xLTUNrQTlIZEFyRUJKckI0Snc1b1hXaGVYOXpDTVkiLCJkZXZpY2VJZCI6ImFtem4xLmFzay5kZXZpY2UuQUVURFA1UE9PT05CWTVWSVNVR09IUFFUU0VNT1BMVTdJQlRBQ1o3VE9IR0hBWFZJVUY2MllIQ0tYTTVPQ0VTNlVENzJWU0JZRFhSVzRPWjRFNUhUQkpSUDZSMjJNQ0FMVEJaWlNUN0hHSVlJNDVCT083SExTTTJFQUpaQUJaTk1OQUxXTDNRS1VaRlhDU05CRlZEU0lGVVo3WUVIWDZRR0ZHTUZQWjRFUVYzSjUyWkVYWktNNCIsInVzZXJJZCI6ImFtem4xLmFzay5hY2NvdW50LkFGWURWTVlRSjZQRllPT083RlVHWDNCWVpDQVBUVU1IWFdZUlVZWTI3WkkyWVRVVzZCM1NRUFlMSFAyNkFLRDVHN1VaWFVFQUtUTEVZQUhUR0kyUkkyTjVGSlRKMzJYT0s0QkpIQVdPRFZOSkdMR0xVNjNXS1pXVUZYQlFPWkhONlY1VzJWU1JSUzRDSU8zUUdCQkNGSUZaSUs1QlFRRk1EM1M2RjdWUlNSQklKTkVIVlFMVDJIN0tTWTVNVVZLTlA1WFNHWEg0WUYyNkE3WSJ9fQ.MfWW3xXhpNbNNcOapWMGeyeXOkuCQeJfcQB_hLxEuN92UMBBy40ciUTrLJUpHEeoUcbSN1Ro7X7u5PeNoQrpTNkqCrIBIMrwelwjB1Rcf2ozSTHNhZvlw_sglrPX6PFcqIZTLu1VJfH_A0uA6cb2iIFeD57mUROxqydNRuOKn9Pz131ZE5X6lOxB8BUgHgxuLhn77YXINXUE9AG3nD2aXvjzekXUqG4lbsLJsoY6r9jeR2iGYvNyDw0ZDCFF3y1dtVT-G9GTTwcsya4jAW_VsV2IBNKXINXbYDCMvBUq0tjwgmFmUSDTIjC3vPm7F5Hib7zEdiczj5tYwKF7kRu27Q',
            scopes: {
              'payments:autopay_consent': {
                status: 'GRANTED',
              },
            },
          },
        },
        device: {
          deviceId:
            'amzn1.ask.device.AETDP5POOONBY5VISUGOHPQTSEMOPLU7IBTACZ7TOHGHAXVIUF62YHCKXM5OCES6UD72VSBYDXRW4OZ4E5HTBJRP6R22MCALTBZZST7HGIYI45BOO7HLSM2EAJZABZNMNALWL3QKUZFXCSNBFVDSIFUZ7YEHX6QGFGMFPZ4EQV3J52ZEXZKM4',
          supportedInterfaces: {
            'Alexa.Camera.PhotoCaptureController': {},
            'Alexa.Camera.VideoCaptureController': {},
          },
        },
        apiEndpoint: 'https://api.eu.amazonalexa.com',
        apiAccessToken:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjEifQ.eyJhdWQiOiJodHRwczovL2FwaS5hbWF6b25hbGV4YS5jb20iLCJpc3MiOiJBbGV4YVNraWxsS2l0Iiwic3ViIjoiYW16bjEuYXNrLnNraWxsLjY3NjgyODI1LTQ0NjktNDliNy05YTBjLTg1OGZiNjI3ZGEzZCIsImV4cCI6MTU1NjYzMDczMywiaWF0IjoxNTU2NjMwNDMzLCJuYmYiOjE1NTY2MzA0MzMsInByaXZhdGVDbGFpbXMiOnsiY29uc2VudFRva2VuIjoiQXR6YXxJd0VCSUh5MEhvMDY0Rzg3eFhLNTg3WnoteDNJdk44SUhpbHZjTTZPU21tTHMtOVp5Wi1QNnFVVHg5SWl2MjZ0dGFxbDJ2bEdkVFhxS1I1QXY0dTNuZGFHN1Nhc3pZLW9pdmhROWdRR1A3QVY0dk5SSlZXSndDUGF3Y3RLSS1oNFU5UExiUjF2blhyYVRmejJEUFZrYXFCeElrMWZLbHItLWF3UHZmV2ZQN2t3Y3E0dXhSUHE4Ni00NGZfeURta081eHpHbHgwYVV5MVBXRlI3WTFwRlVFYWtUTUp4bnhpamE0R2VMU0IwbEcyTHNyU3NqQ0xheDJoZXNKMEgzUWZ6UUI2ajc5cXoxTEM0ZUkwN2cxMFQzVTFQNERtRnF3UG1MbzVNb0FObjB1eVU1ZDIyal9vcmZoZ1Z6TW9hcDFKVXVRTEFWcjBuRktyWXZKVnJSNWE3TlNxWERrZTYwRHplaVJxZmNjMXBzb19JZXRtQ0NBX3lqejdnTkNGUXgyYlBrSjVfVm9UTWpYeURtTWxmd2ZwNVFfZ1F3OVFBU2R1RVlMQzIzY2FkZW9aT1ZydmxMVWZPdE9oTFE1SlR0TkhZaXEtQUhhX2tuYmg1V2tZT0NZT1FtM0hEbmkwTlEwUDJnamtuYnNoSHlCR1ZXaHM2aDM5OXBXWmxKaWNzc2RUa19kM2I1WVRQck5CUGFqSjFIdjREQ1J3eXd0Y1R6cEN4elMtd2s3aW05UXYwMmRSa1pBVWpqc3lUaUxoTTNWNWhBOGNBNi1ZdG9FM3F4UTNzcWFnSzV2VmkwTzQ5M1o3Z2loeDZJUG5vTEtNQ2tBOUhkQXJFQkpyQjRKdzVvWFdoZVg5ekNNWSIsImRldmljZUlkIjoiYW16bjEuYXNrLmRldmljZS5BRVREUDVQT09PTkJZNVZJU1VHT0hQUVRTRU1PUExVN0lCVEFDWjdUT0hHSEFYVklVRjYyWUhDS1hNNU9DRVM2VUQ3MlZTQllEWFJXNE9aNEU1SFRCSlJQNlIyMk1DQUxUQlpaU1Q3SEdJWUk0NUJPTzdITFNNMkVBSlpBQlpOTU5BTFdMM1FLVVpGWENTTkJGVkRTSUZVWjdZRUhYNlFHRkdNRlBaNEVRVjNKNTJaRVhaS000IiwidXNlcklkIjoiYW16bjEuYXNrLmFjY291bnQuQUZZRFZNWVFKNlBGWU9PTzdGVUdYM0JZWkNBUFRVTUhYV1lSVVlZMjdaSTJZVFVXNkIzU1FQWUxIUDI2QUtENUc3VVpYVUVBS1RMRVlBSFRHSTJSSTJONUZKVEozMlhPSzRCSkhBV09EVk5KR0xHTFU2M1dLWldVRlhCUU9aSE42VjVXMlZTUlJTNENJTzNRR0JCQ0ZJRlpJSzVCUVFGTUQzUzZGN1ZSU1JCSUpORUhWUUxUMkg3S1NZNU1VVktOUDVYU0dYSDRZRjI2QTdZIn19.awyWOhBNoI0eYKc8XJ4wNMIhRm3TRW_oqyfPpxeCtV0m8QQ6TMbGGuyLEtc6XNc8oRI0ki1nOL2P1b_J-JOVK8geWPukvd6h4KjwBGMHHO7J_pfZoasWQGwl6WncMsp3cb57_jw015fBCqCRKK76by_ZCFnU5bUqlndFA1wRcNrWO3aT3byb2VpDgTBcCXAxYG3UjV9oVQEq5NQ2nHut60lj6N2SgC9SO9ROcTCq1sabg5IavD4sDLCq5M4y3fHlyG0-ScT326o0Vc2GVBLb4kPUNlNwZn1Ply2nTJazcYfUX_F_AXK3uIONLO7OQ_UGEW_LPMl7buviB19vYQ7ITQ',
      },
    },
    request: {
      type: 'LaunchRequest',
      requestId: 'amzn1.echo-api.request.cd49948d-535f-47d7-adac-df78bb453296',
      timestamp: '2019-04-30T13:20:33Z',
      locale: 'de-DE',
      shouldLinkResultBeReturned: false,
    },
  }),
);

const denied = JSON.parse(
  JSON.stringify({
    version: '1.0',
    context: {
      System: {
        application: {
          applicationId: 'amzn1.ask.skill.67682825-4469-49b7-9a0c-858fb627da3d',
        },
        user: {
          userId:
            'amzn1.ask.account.AFYDVMYQJ6PFYOOO7FUGX3BYZCAPTUMHXWYRUYY27ZI2YTUW6B3SQPYLHP26AKD5G7UZXUEAKTLEYAHTGI2RI2N5FJTJ32XOK4BJHAWODVNJGLGLU63WKZWUFXBQOZHN6V5W2VSRRS4CIO3QGBBCFIFZIK5BQQFMD3S6F7VRSRBIJNEHVQLT2H7KSY5MUVKNP5XSGXH4YF26A7Y',
          permissions: {
            consentToken:
              'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjEifQ.eyJhdWQiOiJodHRwczovL2FwaS5hbWF6b25hbGV4YS5jb20iLCJpc3MiOiJBbGV4YVNraWxsS2l0Iiwic3ViIjoiYW16bjEuYXNrLnNraWxsLjY3NjgyODI1LTQ0NjktNDliNy05YTBjLTg1OGZiNjI3ZGEzZCIsImV4cCI6MTU1NjYzMDczMywiaWF0IjoxNTU2NjMwNDMzLCJuYmYiOjE1NTY2MzA0MzMsInByaXZhdGVDbGFpbXMiOnsiaXNEZXByZWNhdGVkIjoidHJ1ZSIsImNvbnNlbnRUb2tlbiI6IkF0emF8SXdFQklIeTBIbzA2NEc4N3hYSzU4N1p6LXgzSXZOOElIaWx2Y002T1NtbUxzLTlaeVotUDZxVVR4OUlpdjI2dHRhcWwydmxHZFRYcUtSNUF2NHUzbmRhRzdTYXN6WS1vaXZoUTlnUUdQN0FWNHZOUkpWV0p3Q1Bhd2N0S0ktaDRVOVBMYlIxdm5YcmFUZnoyRFBWa2FxQnhJazFmS2xyLS1hd1B2ZldmUDdrd2NxNHV4UlBxODYtNDRmX3lEbWtPNXh6R2x4MGFVeTFQV0ZSN1kxcEZVRWFrVE1KeG54aWphNEdlTFNCMGxHMkxzclNzakNMYXgyaGVzSjBIM1FmelFCNmo3OXF6MUxDNGVJMDdnMTBUM1UxUDREbUZxd1BtTG81TW9BTm4wdXlVNWQyMmpfb3JmaGdWek1vYXAxSlV1UUxBVnIwbkZLcll2SlZyUjVhN05TcVhEa2U2MER6ZWlScWZjYzFwc29fSWV0bUNDQV95ano3Z05DRlF4MmJQa0o1X1ZvVE1qWHlEbU1sZndmcDVRX2dRdzlRQVNkdUVZTEMyM2NhZGVvWk9WcnZsTFVmT3RPaExRNUpUdE5IWWlxLUFIYV9rbmJoNVdrWU9DWU9RbTNIRG5pME5RMFAyZ2prbmJzaEh5QkdWV2hzNmgzOTlwV1psSmljc3NkVGtfZDNiNVlUUHJOQlBhakoxSHY0RENSd3l3dGNUenBDeHpTLXdrN2ltOVF2MDJkUmtaQVVqanN5VGlMaE0zVjVoQThjQTYtWXRvRTNxeFEzc3FhZ0s1dlZpME80OTNaN2dpaHg2SVBub0xLTUNrQTlIZEFyRUJKckI0Snc1b1hXaGVYOXpDTVkiLCJkZXZpY2VJZCI6ImFtem4xLmFzay5kZXZpY2UuQUVURFA1UE9PT05CWTVWSVNVR09IUFFUU0VNT1BMVTdJQlRBQ1o3VE9IR0hBWFZJVUY2MllIQ0tYTTVPQ0VTNlVENzJWU0JZRFhSVzRPWjRFNUhUQkpSUDZSMjJNQ0FMVEJaWlNUN0hHSVlJNDVCT083SExTTTJFQUpaQUJaTk1OQUxXTDNRS1VaRlhDU05CRlZEU0lGVVo3WUVIWDZRR0ZHTUZQWjRFUVYzSjUyWkVYWktNNCIsInVzZXJJZCI6ImFtem4xLmFzay5hY2NvdW50LkFGWURWTVlRSjZQRllPT083RlVHWDNCWVpDQVBUVU1IWFdZUlVZWTI3WkkyWVRVVzZCM1NRUFlMSFAyNkFLRDVHN1VaWFVFQUtUTEVZQUhUR0kyUkkyTjVGSlRKMzJYT0s0QkpIQVdPRFZOSkdMR0xVNjNXS1pXVUZYQlFPWkhONlY1VzJWU1JSUzRDSU8zUUdCQkNGSUZaSUs1QlFRRk1EM1M2RjdWUlNSQklKTkVIVlFMVDJIN0tTWTVNVVZLTlA1WFNHWEg0WUYyNkE3WSJ9fQ.MfWW3xXhpNbNNcOapWMGeyeXOkuCQeJfcQB_hLxEuN92UMBBy40ciUTrLJUpHEeoUcbSN1Ro7X7u5PeNoQrpTNkqCrIBIMrwelwjB1Rcf2ozSTHNhZvlw_sglrPX6PFcqIZTLu1VJfH_A0uA6cb2iIFeD57mUROxqydNRuOKn9Pz131ZE5X6lOxB8BUgHgxuLhn77YXINXUE9AG3nD2aXvjzekXUqG4lbsLJsoY6r9jeR2iGYvNyDw0ZDCFF3y1dtVT-G9GTTwcsya4jAW_VsV2IBNKXINXbYDCMvBUq0tjwgmFmUSDTIjC3vPm7F5Hib7zEdiczj5tYwKF7kRu27Q',
            scopes: {
              'payments:autopay_consent': {
                status: 'DENIED',
              },
            },
          },
        },
        device: {
          deviceId:
            'amzn1.ask.device.AETDP5POOONBY5VISUGOHPQTSEMOPLU7IBTACZ7TOHGHAXVIUF62YHCKXM5OCES6UD72VSBYDXRW4OZ4E5HTBJRP6R22MCALTBZZST7HGIYI45BOO7HLSM2EAJZABZNMNALWL3QKUZFXCSNBFVDSIFUZ7YEHX6QGFGMFPZ4EQV3J52ZEXZKM4',
          supportedInterfaces: {
            'Alexa.Camera.PhotoCaptureController': {},
            'Alexa.Camera.VideoCaptureController': {},
          },
        },
        apiEndpoint: 'https://api.eu.amazonalexa.com',
        apiAccessToken:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjEifQ.eyJhdWQiOiJodHRwczovL2FwaS5hbWF6b25hbGV4YS5jb20iLCJpc3MiOiJBbGV4YVNraWxsS2l0Iiwic3ViIjoiYW16bjEuYXNrLnNraWxsLjY3NjgyODI1LTQ0NjktNDliNy05YTBjLTg1OGZiNjI3ZGEzZCIsImV4cCI6MTU1NjYzMDczMywiaWF0IjoxNTU2NjMwNDMzLCJuYmYiOjE1NTY2MzA0MzMsInByaXZhdGVDbGFpbXMiOnsiY29uc2VudFRva2VuIjoiQXR6YXxJd0VCSUh5MEhvMDY0Rzg3eFhLNTg3WnoteDNJdk44SUhpbHZjTTZPU21tTHMtOVp5Wi1QNnFVVHg5SWl2MjZ0dGFxbDJ2bEdkVFhxS1I1QXY0dTNuZGFHN1Nhc3pZLW9pdmhROWdRR1A3QVY0dk5SSlZXSndDUGF3Y3RLSS1oNFU5UExiUjF2blhyYVRmejJEUFZrYXFCeElrMWZLbHItLWF3UHZmV2ZQN2t3Y3E0dXhSUHE4Ni00NGZfeURta081eHpHbHgwYVV5MVBXRlI3WTFwRlVFYWtUTUp4bnhpamE0R2VMU0IwbEcyTHNyU3NqQ0xheDJoZXNKMEgzUWZ6UUI2ajc5cXoxTEM0ZUkwN2cxMFQzVTFQNERtRnF3UG1MbzVNb0FObjB1eVU1ZDIyal9vcmZoZ1Z6TW9hcDFKVXVRTEFWcjBuRktyWXZKVnJSNWE3TlNxWERrZTYwRHplaVJxZmNjMXBzb19JZXRtQ0NBX3lqejdnTkNGUXgyYlBrSjVfVm9UTWpYeURtTWxmd2ZwNVFfZ1F3OVFBU2R1RVlMQzIzY2FkZW9aT1ZydmxMVWZPdE9oTFE1SlR0TkhZaXEtQUhhX2tuYmg1V2tZT0NZT1FtM0hEbmkwTlEwUDJnamtuYnNoSHlCR1ZXaHM2aDM5OXBXWmxKaWNzc2RUa19kM2I1WVRQck5CUGFqSjFIdjREQ1J3eXd0Y1R6cEN4elMtd2s3aW05UXYwMmRSa1pBVWpqc3lUaUxoTTNWNWhBOGNBNi1ZdG9FM3F4UTNzcWFnSzV2VmkwTzQ5M1o3Z2loeDZJUG5vTEtNQ2tBOUhkQXJFQkpyQjRKdzVvWFdoZVg5ekNNWSIsImRldmljZUlkIjoiYW16bjEuYXNrLmRldmljZS5BRVREUDVQT09PTkJZNVZJU1VHT0hQUVRTRU1PUExVN0lCVEFDWjdUT0hHSEFYVklVRjYyWUhDS1hNNU9DRVM2VUQ3MlZTQllEWFJXNE9aNEU1SFRCSlJQNlIyMk1DQUxUQlpaU1Q3SEdJWUk0NUJPTzdITFNNMkVBSlpBQlpOTU5BTFdMM1FLVVpGWENTTkJGVkRTSUZVWjdZRUhYNlFHRkdNRlBaNEVRVjNKNTJaRVhaS000IiwidXNlcklkIjoiYW16bjEuYXNrLmFjY291bnQuQUZZRFZNWVFKNlBGWU9PTzdGVUdYM0JZWkNBUFRVTUhYV1lSVVlZMjdaSTJZVFVXNkIzU1FQWUxIUDI2QUtENUc3VVpYVUVBS1RMRVlBSFRHSTJSSTJONUZKVEozMlhPSzRCSkhBV09EVk5KR0xHTFU2M1dLWldVRlhCUU9aSE42VjVXMlZTUlJTNENJTzNRR0JCQ0ZJRlpJSzVCUVFGTUQzUzZGN1ZSU1JCSUpORUhWUUxUMkg3S1NZNU1VVktOUDVYU0dYSDRZRjI2QTdZIn19.awyWOhBNoI0eYKc8XJ4wNMIhRm3TRW_oqyfPpxeCtV0m8QQ6TMbGGuyLEtc6XNc8oRI0ki1nOL2P1b_J-JOVK8geWPukvd6h4KjwBGMHHO7J_pfZoasWQGwl6WncMsp3cb57_jw015fBCqCRKK76by_ZCFnU5bUqlndFA1wRcNrWO3aT3byb2VpDgTBcCXAxYG3UjV9oVQEq5NQ2nHut60lj6N2SgC9SO9ROcTCq1sabg5IavD4sDLCq5M4y3fHlyG0-ScT326o0Vc2GVBLb4kPUNlNwZn1Ply2nTJazcYfUX_F_AXK3uIONLO7OQ_UGEW_LPMl7buviB19vYQ7ITQ',
      },
    },
    request: {
      type: 'LaunchRequest',
      requestId: 'amzn1.echo-api.request.cd49948d-535f-47d7-adac-df78bb453296',
      timestamp: '2019-04-30T13:20:33Z',
      locale: 'de-DE',
      shouldLinkResultBeReturned: false,
    },
  }),
);

test('permission granted', () => {
  expect(PermissionManager.get().isPurchasingAndPayEnabled(granted)).toBe(true);
  expect(PermissionManager.get().isPurchasingAndPayEnabled(denied)).toBe(false);
});
